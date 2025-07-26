type ProgressProps = {
  password: string;
};

export default function Progress({ password }: ProgressProps) {
  console.log(password);
  return (
    <div className="flex flex-col gap-2">
      <progress className="progress progress-success w-96" value="100" max="100"></progress>
      <p>Strong </p>
    </div>
  );
}
