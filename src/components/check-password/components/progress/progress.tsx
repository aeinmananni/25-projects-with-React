import zxcvbn from 'zxcvbn';
import { CheckPasswordType } from '../../models/checkPassword';
import { CheckPasswordHandler } from '../../util';

type ProgressProps = {
  password: string;
};

export default function Progress({ password }: ProgressProps) {
  const testResult = zxcvbn(password);
  const result: CheckPasswordType | undefined = CheckPasswordHandler(testResult.score);
  return (
    <div className="flex flex-col gap-2">
      <div className="w-96 border rounded-full shadow-sm border-gray-500">
        <div
          style={{ width: `${result?.percent}%` }}
          className={`progress duration-300 ${result?.progressStatus}`}
        />
      </div>
      <p>{result?.title} </p>
    </div>
  );
}
