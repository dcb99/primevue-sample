import { useToast } from 'primevue/usetoast';

const toastLifetime = 7000;

export function infoToast(detail: string, title?: string): void {
  const toastInstance = useToast();
  toastInstance.add({
    severity: 'info',
    detail: detail,
    summary: title,
    life: toastLifetime,
  });
}

export function errorToast(detail: string, title?: string): void {
  const toastInstance = useToast();
  toastInstance.add({
    severity: 'error',
    detail: detail,
    summary: title,
    life: toastLifetime,
  });
}

export function successToast(detail: string, title?: string): void {
  const toastInstance = useToast();
  toastInstance.add({
    severity: 'success',
    detail: detail,
    summary: title,
    life: toastLifetime,
  });
}

export function warnToast(detail: string, title?: string): void {
  const toastInstance = useToast();
  toastInstance.add({
    severity: 'warn',
    detail: detail,
    summary: title,
    life: toastLifetime,
  });
}
