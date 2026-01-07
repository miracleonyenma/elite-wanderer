// ./src/services/email.service.ts

import nodemailer, { Transporter } from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer/index.js";

// Event types for monitoring
export enum EventType {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
}

// Impact levels
export enum ImpactLevel {
  CRITICAL = "critical",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

// Extended email payload interface
export interface MonitoringEmailPayload {
  to?: string | string[];
  subject: string;
  content: string;
  eventType: EventType;
  impactLevel?: ImpactLevel;
  sourceApplication?: string;
  timestamp?: Date;
  metadata?: Record<string, unknown>;
  attachments?: Array<Attachment>;
  customCredentials?: {
    user: string;
    pass: string;
  };
}

export class MonitoringEmailService {
  private transporter!: Transporter;
  private defaultConfig: {
    user: string;
    pass: string;
    defaultToEmail: string;
    host: string;
    port: number;
    secure: boolean;
  };

  constructor(customConfig?: {
    host?: string;
    port?: number;
    secure?: boolean;
    defaultToEmail?: string;
  }) {
    // Initialize with default or custom configuration
    this.defaultConfig = {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
      defaultToEmail: process.env.DEFAULT_TO_EMAIL || "",
      host: customConfig?.host || process.env.SMTP_HOST || "smtp.gmail.com",
      port: customConfig?.port || parseInt(process.env.SMTP_PORT || "587"),
      secure:
        customConfig?.secure || process.env.SMTP_SECURE === "true" || false,
    };

    this.initializeTransporter();
  }

  private initializeTransporter(customCredentials?: {
    user: string;
    pass: string;
  }) {
    this.transporter = nodemailer.createTransport({
      host: this.defaultConfig.host,
      port: this.defaultConfig.port,
      secure: this.defaultConfig.secure,
      auth: {
        user: customCredentials?.user || this.defaultConfig.user,
        pass: customCredentials?.pass || this.defaultConfig.pass,
      },
    });
  }

  // Get modern palette based on event type
  private getEventStyling(eventType: EventType): {
    color: string;
    label: string;
  } {
    switch (eventType) {
      case EventType.ERROR:
        return { color: "#E11D48", label: "Error" }; // Rose Red
      case EventType.SUCCESS:
        return { color: "#16A34A", label: "Success" }; // Green
      case EventType.WARNING:
        return { color: "#D97706", label: "Warning" }; // Amber
      case EventType.INFO:
      default:
        return { color: "#2563EB", label: "Info" }; // Blue
    }
  }

  // Generate a minimal pill badge for impact
  private getImpactBadge(impactLevel?: ImpactLevel): string {
    if (!impactLevel) return "";

    const styles: Record<ImpactLevel, { bg: string; text: string }> = {
      [ImpactLevel.CRITICAL]: { bg: "#991B1B", text: "#ffffff" },
      [ImpactLevel.HIGH]: { bg: "#DC2626", text: "#ffffff" },
      [ImpactLevel.MEDIUM]: { bg: "#F59E0B", text: "#ffffff" },
      [ImpactLevel.LOW]: { bg: "#E5E7EB", text: "#374151" },
    };

    const style = styles[impactLevel];
    return `
      <span style="
        background-color: ${style.bg};
        color: ${style.text};
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 8px;
        vertical-align: middle;
      ">
        ${impactLevel}
      </span>
    `;
  }

  // Format JSON as a clean properties list
  private formatJSON(json: Record<string, unknown>): string {
    if (!json || Object.keys(json).length === 0) return "";

    let rows = "";
    for (const [key, value] of Object.entries(json)) {
      const displayValue =
        typeof value === "object" ? JSON.stringify(value, null, 2) : value;

      rows += `
        <div style="border-bottom: 1px solid #f0f0f0; padding: 10px 0;">
          <dt style="font-size: 11px; text-transform: uppercase; color: #888; font-weight: 600; margin-bottom: 4px;">${key}</dt>
          <dd style="margin: 0; font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 13px; color: #333; word-break: break-all;">${displayValue}</dd>
        </div>
      `;
    }

    return `
      <div style="background-color: #fafafa; border-radius: 8px; padding: 16px; margin-top: 24px;">
        <h4 style="margin: 0 0 12px 0; font-size: 12px; color: #555; text-transform: uppercase; letter-spacing: 0.5px;">Event Metadata</h4>
        <dl style="margin: 0;">
          ${rows}
        </dl>
      </div>
    `;
  }

  // Create Minimal HTML template
  private createEmailTemplate(payload: MonitoringEmailPayload): string {
    const {
      subject,
      content,
      eventType,
      impactLevel,
      sourceApplication,
      timestamp = new Date(),
      metadata,
    } = payload;

    const styling = this.getEventStyling(eventType);
    const impactBadge = this.getImpactBadge(impactLevel);
    const metadataSection = metadata ? this.formatJSON(metadata) : "";
    const appSource = sourceApplication || "System";
    const formattedDate = timestamp.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
              background-color: #f4f4f7; 
              color: #4a4a4a; 
              margin: 0; 
              padding: 0; 
              -webkit-text-size-adjust: none; 
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              background: #ffffff; 
              border-radius: 8px; 
              overflow: hidden; 
              box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            }
            .accent-bar {
              height: 4px;
              width: 100%;
              background-color: ${styling.color};
            }
            .content { 
              padding: 40px; 
            }
            .header-meta {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              color: #888;
              margin-bottom: 20px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            h1 {
              font-size: 22px;
              font-weight: 700;
              color: #1a1a1a;
              margin: 0 0 24px 0;
              line-height: 1.4;
            }
            .message-body {
              font-size: 16px;
              line-height: 1.6;
              color: #374151;
            }
            .footer { 
              text-align: center; 
              padding: 24px; 
              color: #9ca3af; 
              font-size: 12px; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="accent-bar"></div>
            <div class="content">
              <div class="header-meta">
                <span>${appSource}</span>
                <span>${formattedDate}</span>
              </div>

              <h1>
                <span style="color: ${styling.color}; margin-right: 6px;">●</span>
                ${subject} 
                ${impactBadge}
              </h1>
              
              <div class="message-body">
                ${content}
              </div>
              
              ${metadataSection}
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">Automated Notification • ${styling.label} Level Event</p>
          </div>
        </body>
      </html>
    `;
  }

  // Method to verify SMTP connection
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error("Failed to verify SMTP connection:", error);
      return false;
    }
  }

  // Send email with monitoring information
  async sendMonitoringEmail(payload: MonitoringEmailPayload): Promise<void> {
    try {
      if (payload.customCredentials) {
        this.initializeTransporter(payload.customCredentials);
      }

      const to = payload.to || this.defaultConfig.defaultToEmail;
      if (!to) {
        throw new Error("No recipient email specified");
      }

      const htmlTemplate = this.createEmailTemplate(payload);

      const mailOptions = {
        from: `"System Monitor" <${
          payload.customCredentials?.user || this.defaultConfig.user
        }>`,
        to,
        subject: `${
          payload.eventType === EventType.ERROR ? "🚨" : ""
        } ${payload.subject}`,
        html: htmlTemplate,
        attachments: payload.attachments || [],
      };

      await this.transporter.sendMail(mailOptions);

      if (payload.customCredentials) {
        this.initializeTransporter();
      }
    } catch (error) {
      console.error("Failed to send monitoring email:", error);
      throw error;
    }
  }

  // Helper methods
  async sendErrorAlert(
    options: Omit<MonitoringEmailPayload, "eventType">,
  ): Promise<void> {
    return this.sendMonitoringEmail({ ...options, eventType: EventType.ERROR });
  }

  async sendSuccessNotification(
    options: Omit<MonitoringEmailPayload, "eventType">,
  ): Promise<void> {
    return this.sendMonitoringEmail({
      ...options,
      eventType: EventType.SUCCESS,
    });
  }

  async sendWarning(
    options: Omit<MonitoringEmailPayload, "eventType">,
  ): Promise<void> {
    return this.sendMonitoringEmail({
      ...options,
      eventType: EventType.WARNING,
    });
  }

  async sendInfo(
    options: Omit<MonitoringEmailPayload, "eventType">,
  ): Promise<void> {
    return this.sendMonitoringEmail({ ...options, eventType: EventType.INFO });
  }
}
