'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GenerateDatasetPage() {
  const [datasetType, setDatasetType] = useState<'narrowband' | 'wideband'>('narrowband');
  const [savePath, setSavePath] = useState('./datasets/narrowband_classifier_example');
  const [fftSize, setFftSize] = useState(256);
  const [impairmentLevel, setImpairmentLevel] = useState(0);
  const [seed, setSeed] = useState(123456789);
  const [samplesPerClassTrain, setSamplesPerClassTrain] = useState(10);
  const [samplesPerClassVal, setSamplesPerClassVal] = useState(2);
  const [transform, setTransform] = useState('ComplexTo2D');
  const [targetTransform, setTargetTransform] = useState('ClassIndex');

  const handleSubmit = () => {
    console.log({
      datasetType,
      savePath,
      fftSize,
      impairmentLevel,
      seed,
      samplesPerClassTrain,
      samplesPerClassVal,
      transform,
      targetTransform,
    });
    alert('Dataset generation submitted. (Check console for values)');
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6 md:px-20 font-sans">
      <div className="flex items-center gap-4 mb-10">
        <Image src="/icons/torchsig_dataset.png" alt="Dataset Icon" width={60} height={60} />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Build a TorchSig Dataset
        </h1>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-4xl mx-auto grid gap-6">

        {/* Dataset Type */}
        <div>
          <label className="block font-semibold mb-1 text-sm">Dataset Type</label>
          <select
            value={datasetType}
            onChange={(e) => setDatasetType(e.target.value as 'narrowband' | 'wideband')}
            className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
          >
            <option value="narrowband">Narrowband</option>
            <option value="wideband" disabled>Wideband (coming soon)</option>
          </select>
        </div>

        {/* Save Path */}
        <div>
          <label className="block font-semibold mb-1 text-sm">Save Path</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={savePath}
              onChange={(e) => setSavePath(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
              placeholder="./datasets/my_dataset"
            />
            <input
              type="file"
              webkitdirectory="true"
              directory=""
              className="hidden"
              id="folderPicker"
            />
            <label htmlFor="folderPicker" className="text-sm px-3 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition">
              Browse
            </label>
          </div>
        </div>

        {/* Two-column grid for numeric inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-sm">FFT Size</label>
            <input
              type="number"
              value={fftSize}
              onChange={(e) => setFftSize(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Impairment Level</label>
            <input
              type="number"
              value={impairmentLevel}
              onChange={(e) => setImpairmentLevel(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Random Seed</label>
            <input
              type="number"
              value={seed}
              onChange={(e) => setSeed(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Train Samples per Class</label>
            <input
              type="number"
              value={samplesPerClassTrain}
              onChange={(e) => setSamplesPerClassTrain(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Val Samples per Class</label>
            <input
              type="number"
              value={samplesPerClassVal}
              onChange={(e) => setSamplesPerClassVal(parseInt(e.target.value))}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/* Transforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1 text-sm">Transform</label>
            <select
              value={transform}
              onChange={(e) => setTransform(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              <option value="ComplexTo2D">ComplexTo2D</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-sm">Target Transform</label>
            <select
              value={targetTransform}
              onChange={(e) => setTargetTransform(e.target.value)}
              className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white"
            >
              <option value="ClassIndex">ClassIndex</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition self-start"
        >
          Generate Dataset
        </button>
      </div>
    </main>
  );
}
