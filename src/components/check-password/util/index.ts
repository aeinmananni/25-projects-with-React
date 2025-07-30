import { CheckPasswordType } from '../models/checkPassword';

export const CheckPasswordHandler = (score: number): CheckPasswordType | undefined => {
  switch (score) {
    case 0:
      return {
        percent: 10,
        title: 'Very Weak',
        progressStatus: 'bg-red-700',
      };
    case 1:
      return {
        percent: 25,
        title: 'Weak',
        progressStatus: 'bg-orange-500',
      };
    case 2:
      return {
        percent: 50,
        title: 'Medium',
        progressStatus: 'bg-blue-500',
      };
    case 3:
      return {
        percent: 75,
        title: 'Good',
        progressStatus: 'bg-green-400',
      };
    case 4:
      return {
        percent: 100,
        title: 'Strong',
        progressStatus: 'bg-green-700',
      };
  }
};
