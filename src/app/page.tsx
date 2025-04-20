'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 md:px-20 lg:px-40 font-sans">
      {/* Logo and Title */}
      <div className="flex justify-center mb-6">
        <Image
          src="/torchsig_logo.png"
          alt="TorchSig Logo"
          width={220}
          height={220}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        TorchSig Interactive Interface
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
        TorchSig is an open-source PyTorch-based library for deep learning on radio frequency (RF) spectrum data.
        Use this interface to create datasets, configure training, and run signal classification and detection models.
      </p>

      {/* Action Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">

        {/* Build Dataset Icon Button with Side Text */}
        <div className="flex items-center gap-4">
          <Link href="/generate_dataset">
            <Image
              src="/icons/torchsig_dataset.png"
              alt="Dataset Icon"
              width={50}
              height={50}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </Link>
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            Build a TorchSig dataset
          </span>
        </div>

        {/* Other Buttons */}
        <Button icon="/icons/options.svg">Configure Options</Button>
        <Button icon="/icons/training.svg">Run Training</Button>
        <Button icon="/icons/inference.svg">Run Inference</Button>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 mt-16">
        Learn more at{' '}
        <a
          href="https://torchsig.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          torchsig.com
        </a>{' '}
        or view the project on{' '}
        <a
          href="https://github.com/torchdsp/torchsig"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>.
      </footer>
    </main>
  );
}
