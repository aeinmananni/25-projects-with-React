import { useState } from 'react';
import { Input } from '../../custom/input';
import { Progress } from './components';
export default function CheckPassword() {
  const [password, setPassword] = useState<string>('');
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 p-2">
      <h1>Change Your Password</h1>
      <Input
        styles={{ parentClassName: 'w-1/2' }}
        placeholder="changePassword..."
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="border w-full p-2 rounded-lg"
      />
      <Progress password={password} />
    </div>
  );
}
