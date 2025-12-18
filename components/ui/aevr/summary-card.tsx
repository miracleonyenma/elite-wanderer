import React, { ReactNode } from "react";
import { formatCurrency, formatNumber } from "@/utils/aevr/number-formatter";

export interface SummaryItem {
  label: string;
  value: ReactNode;
  price?: {
    amount: Maybe<number>;
    currency: Maybe<string>;
  };
  content?: ReactNode;
}

type Maybe<T> = T | null | undefined;

const SummaryCard: React.FC<{
  items: SummaryItem[];
  summary?: Maybe<SummaryItem>;
  layout?: "vertical" | "horizontal";
}> = ({ items, summary, layout = "vertical" }) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`flex ${
        isHorizontal ? "flex-col" : "flex-col"
      } gap-0 bg-card ${
        summary ? "rounded-b-2xl rounded-t-2xl bg-muted/50!" : "rounded-2xl"
      }`}
    >
      {/* Items Container */}
      <div className={`flex ${isHorizontal ? "flex-row" : "flex-col"} gap-0`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap items-end justify-between border border-border bg-card px-3 py-3 ${
              isHorizontal
                ? // Horizontal layout classes
                  `flex-1 ${
                    index === 0
                      ? "rounded-l-xl border-r-0"
                      : index === items.length - 1
                      ? "rounded-r-xl border-l-0"
                      : "border-l-0 border-r-0"
                  } ${
                    !summary && index === items.length - 1
                      ? "rounded-br-2xl"
                      : ""
                  } ${!summary && index === 0 ? "rounded-bl-2xl" : ""}`
                : // Vertical layout classes (original)
                  `border-b-0 ${index === 0 && "rounded-t-xl"} ${
                    index === items.length - 1 ? "rounded-b-2xl border-b!" : ""
                  } ${
                    summary
                      ? index === items.length - 1
                        ? "rounded-b-2xl border-b!"
                        : ""
                      : ""
                  }`
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
              {typeof item.value === "string" && item.value.length > 0 ? (
                <span className="font-medium text-foreground">
                  {item.value}
                </span>
              ) : (
                item.value
              )}
            </div>
            {item?.content ? (
              <>{item?.content}</>
            ) : item?.price ? (
              <div className="flex text-lg font-bold">
                {item?.price?.currency
                  ? formatCurrency(item?.price?.amount || 0, {
                      currency: item.price.currency,
                      locale: "en-US",
                    })
                  : formatNumber(item?.price?.amount || 0)}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Summary Section - Always at bottom */}
      {summary && (
        <div className="flex items-end justify-between rounded-b-2xl border-t-0 bg-muted/50 p-3 border-border">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              {summary.label}
            </span>
            <span className="font-medium text-foreground">
              {summary.value || ""}
            </span>
          </div>
          {summary?.content ? (
            <>{summary?.content}</>
          ) : summary.price ? (
            <div className="flex text-lg font-bold">
              {summary?.price?.currency
                ? formatCurrency(summary?.price?.amount || 0, {
                    currency: summary.price.currency,
                    locale: "en-US",
                  })
                : formatNumber(summary?.price?.amount || 0)}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
