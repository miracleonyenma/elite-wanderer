"use client";

import React, { useState, ReactNode, useCallback, useEffect } from "react";
import ResponsiveDialog from "@/components/ui/aevr/responsive-dialog";
import { usePersistedState } from "@/hooks/aevr/use-persisted-state";
import { useStatus, StatusRecord } from "@/hooks/aevr/use-status";
import { Button } from "@/components/ui/aevr/button";
import { ArrowLeft } from "iconsax-react";

export interface StepProps<T = unknown> {
  values: T;
  setValues: (values: T | ((prev: T) => T)) => void;
  next: () => void;
  prev: () => void;
  isFirst: boolean;
  isLast: boolean;
  status: StatusRecord;
  setStatus: (key: string, item: unknown) => void;
  goToStep: (step: number) => void;
}

interface MultiStepDialogProps<T> {
  trigger: ReactNode;
  title?: string;
  description?: string;
  steps: Array<(props: StepProps<T>) => ReactNode>;
  initialValues: T;
  storageKey?: string;
  onComplete?: (values: T) => Promise<void> | void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  persist?: boolean;
}

export function MultiStepDialog<T>({
  trigger,
  title,
  description,
  steps,
  initialValues,
  storageKey,
  onComplete,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  persist = true,
}: MultiStepDialogProps<T>) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen ?? internalOpen;
  const setOpen = setControlledOpen ?? setInternalOpen;

  const [currentStep, setCurrentStep] = useState(0);

  // Conditional hook usage is tricky. We'll use both and pick one based on persist prop.
  // However, hooks cannot be conditional. So we always run both or refactor.
  // Better approach: Use a custom hook or just use persisted state but clear it if persist is false?
  // Or just use a wrapper.
  // Let's use a simple state for non-persisted.

  const persistedState = usePersistedState<T>(initialValues, {
    storageKey: `${storageKey}_values`,
  });

  const simpleState = useState<T>(initialValues);

  const values = persist ? persistedState.state : simpleState[0];
  const setValues = persist ? persistedState.setState : simpleState[1];

  // Reset state on close if not persisting
  useEffect(() => {
    if (!persist && !isOpen) {
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setValues(initialValues);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen, persist, initialValues, setValues]);

  const { status, setStatus } = useStatus({
    namespace: storageKey,
  });

  const next = useCallback(async () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      if (onComplete) {
        await onComplete(values);
      }
      // Optional: close dialog on complete?
      // setOpen(false);
    }
  }, [currentStep, steps.length, onComplete, values]);

  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < steps.length) {
        setCurrentStep(step);
      }
    },
    [steps.length]
  );

  const CurrentStepComponent = steps[currentStep];

  return (
    <ResponsiveDialog
      openPrompt={isOpen}
      onOpenPromptChange={(value) => setOpen(value!)}
      trigger={trigger}
      title={title}
      description={description}
      drawerClose={
        <Button variant="secondary" className="w-full">
          Cancel
        </Button>
      }
    >
      <div className="space-y-4 p-1">
        {/* Progress Indicator (Optional) */}
        <div className="flex items-center gap-2 mb-4">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 rounded-full transition-colors ${
                idx <= currentStep ? "bg-app-theme-600" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {currentStep > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={prev}
            className="mb-2 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft
              size={16}
              className=""
              color="currentColor"
              variant="Bulk"
            />
            Back
          </Button>
        )}

        <CurrentStepComponent
          values={values}
          setValues={setValues}
          next={next}
          prev={prev}
          isFirst={currentStep === 0}
          isLast={currentStep === steps.length - 1}
          status={status}
          setStatus={setStatus as (key: string, item: unknown) => void}
          goToStep={goToStep}
        />
      </div>
    </ResponsiveDialog>
  );
}
