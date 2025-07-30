import { CheckPasswordType } from '../models/checkPassword';

export const CheckPasswordHandler = (score: number): CheckPasswordType | undefined => {
  const percentValue = (score * 100) / 4;
  switch (score) {
    case 0:
      return {
        percent: percentValue,
        title: 'Very Weak',
        progressStatus: 'bg-red-700',
      };
    case 1:
      return {
        percent: percentValue,
        title: 'Weak',
        progressStatus: 'bg-orange-500',
      };
    case 2:
      return {
        percent: percentValue,
        title: 'Medium',
        progressStatus: 'bg-blue-500',
      };
    case 3:
      return {
        percent: percentValue,
        title: 'Good',
        progressStatus: 'bg-green-400',
      };
    case 4:
      return {
        percent: percentValue,
        title: 'Strong',
        progressStatus: 'bg-green-700',
      };
  }
};
