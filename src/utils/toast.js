import { app } from '@/main';

const lifeTime = 3000;
export function showToast(severity, { title = 'Заголовок', body = 'Тело' }) {
  app.config.globalProperties.$toast.add({
    severity, summary: title, detail: body, life: lifeTime
  });
}

export function toastSuccess(options) {
  showToast('success', options);
}

export function toastWarn(options) {
  showToast('warn', options);
}

export function toastInfo(options) {
  showToast('info', options);
}

export function toastError(options) {
  showToast('error', options);
}
