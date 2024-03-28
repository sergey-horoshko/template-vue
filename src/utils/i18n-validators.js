import { createI18n } from 'vue-i18n';
import * as validators from '@vuelidate/validators';

const { createI18nMessage } = validators;

const messages = {
  ru: {
    validations: {
      required: 'Это поле должно быть заполнено',
      minValueRequired: 'Нужно выбрать опцию',
      minLength: 'Значение должно содержать не менее {min} символов',
      maxLength: 'Значение должно содержать не более {max} символов',
      minValue: 'Значение должно быть не менее {min}',
      maxValue: 'Значение должно быть не более {max}',
      between: 'Значение должно быть между {min} и {max}',
      alpha: 'Разрешены только буквы',
      alphaNum: 'Разрешены только буквы и цифры',
      numeric: 'Допускаются только числа',
      integer: 'Допускаются только целые числа',
      decimal: 'Разрешены только десятичные числа',
      email: 'Неверный формат адреса электронной почты',
      ipAddress: 'Неверный формат IP-адреса',
      macAddress: 'Неверный формат MAC-адреса',
      sameAs: 'Значения не идентичны',
      url: 'Неверный формат URL-адреса',
    },
  },
};

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

export const required = withI18nMessage(validators.required);
export const minLength = withI18nMessage(validators.minLength, { withArguments: true });
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true });
export const minValue = withI18nMessage(validators.minValue, { withArguments: true });
export const minValueRequired = withI18nMessage(validators.minValue, { withArguments: true });
export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true });
export const between = withI18nMessage(validators.between, { withArguments: true });
export const alpha = withI18nMessage(validators.alpha);
export const alphaNum = withI18nMessage(validators.alphaNum);
export const numeric = withI18nMessage(validators.numeric);
export const integer = withI18nMessage(validators.integer);
export const decimal = withI18nMessage(validators.decimal);
export const email = withI18nMessage(validators.email);
export const ipAddress = withI18nMessage(validators.ipAddress);
export const macAddress = withI18nMessage(validators.macAddress);
export const sameAs = withI18nMessage(validators.sameAs);
export const url = withI18nMessage(validators.url);
