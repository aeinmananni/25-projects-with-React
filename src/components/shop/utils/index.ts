export const formatCurrent = (num: number) => {
  return Number(num.toFixed(3)).toLocaleString() + ' تومان';
};

/**
 *  این کد چه کاری انجام میدهد
 *  1 - اول ورودی رو به عدد تبدیل میکنه
 *  2- num.toFixed(3) عددی که میاد رو سه رقم سه رقم جدا میکنیم
 *  3- toLocaleString تبدیل به رشته میکند
 */
