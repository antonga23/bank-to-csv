"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { getPDFPageCount, calculateTotalCost, PDFInfo, PRICE_PER_PAGE } from "@/lib/pdf-utils";
import type { BanksByCountry, Bank } from "@/lib/db";

interface ConvertFormProps {
  banksByCountry: BanksByCountry;
}

interface SelectedBank {
  country: string;
  bank_name: string;
}

interface FileWithPages extends File {
  pdfInfo?: PDFInfo;
}

export function ConvertForm({ banksByCountry }: ConvertFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBank, setSelectedBank] = useState<SelectedBank | null>(null);
  const [files, setFiles] = useState<FileWithPages[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<'upload' | 'convert'>('upload');

  // Filter banks based on search query
  const filteredBanksByCountry = Object.entries(banksByCountry).reduce((acc, [country, banks]) => {
    const filteredBanks = banks.filter(bank => {
      const searchLower = searchQuery.toLowerCase();
      return bank.bank_name.toLowerCase().includes(searchLower) ||
             country.toLowerCase().includes(searchLower);
    });
    
    if (filteredBanks.length > 0) {
      acc[country] = filteredBanks;
    }
    return acc;
  }, {} as BanksByCountry);

  const handleBankSelect = (country: string, bank: Bank) => {
    setSelectedBank({ country, bank_name: bank.bank_name });
    setIsModalOpen(false);
    setSearchQuery("");
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setSelectedBank(null);
  };

  const processFiles = async (files: FileWithPages[]) => {
    setIsProcessing(true);
    let totalPageCount = 0;

    try {
      const processedFiles = await Promise.all(
        files.map(async (file) => {
          // log type o file
          console.log("Object should be of type file", typeof(file));
          console.log("File:", file);
          const pdfInfo = await getPDFPageCount(file);
          console.log("PDF info", pdfInfo);
          totalPageCount += pdfInfo.pageCount;
          console.log("Page count", totalPageCount);
          return { ...file, pdfInfo };
        })
      );

      setFiles(processedFiles);
      setTotalPages(totalPageCount);
      setCurrentStep('convert');
    } catch (error) {
      console.error('Error processing PDF files:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      setFiles(newFiles);
      await processFiles(newFiles);
    }
  };

  const totalCost = calculateTotalCost(totalPages);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Bank <span className="text-gray-400 text-xs">Don't see your bank? Click here</span>
        </label>
        <div 
          className="w-full p-2 border rounded-md cursor-pointer bg-white"
          onClick={() => setIsModalOpen(true)}
        >
          {selectedBank ? (
            <div className="flex items-center justify-between">
              <div>
                <span className="text-gray-500">{selectedBank.country}</span>
                <span className="mx-2">|</span>
                <span>{selectedBank.bank_name}</span>
              </div>
            </div>
          ) : (
            <span className="text-gray-500">Select a bank</span>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select Bank"
      >
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter bank name"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full"
          />
          <div className="max-h-96 overflow-y-auto">
            {Object.entries(filteredBanksByCountry).map(([country, banks]) => (
              <div key={country} className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{country}</h3>
                {banks.map((bank) => (
                  <button
                    key={bank.id}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => handleBankSelect(country, bank)}
                  >
                    {bank.bank_name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload File(s)
        </label>
        <Input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          className="w-full"
          disabled={isProcessing}
        />
      </div>

      {isProcessing && (
        <div className="text-blue-500">Processing PDF files...</div>
      )}

      {files.length > 0 && !isProcessing && (
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            Files to be converted:
          </div>
          {files.map((file, index) => (
            <div key={index} className="text-sm">
              {file.name} - {file.pdfInfo?.pageCount || 'Calculating...'} pages
            </div>
          ))}
          <div className="font-medium">
            Total pages: {totalPages}
          </div>
        </div>
      )}

      {selectedBank?.country === 'Botswana' && (
        <div className="text-orange-500">
          You have selected a bank from Botswana. Was this intentional?
        </div>
      )}

      <div className="text-sm text-gray-500">
        You can load multiple statements to convert at the same time as long as they are from the same bank.
      </div>

      <div className="text-sm text-gray-500">
        A CSV file will be created for each PDF bank statement.
      </div>

      <div className="flex justify-end">
        {currentStep === 'upload' ? (
          <Button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 text-gray-600"
            variant="secondary"
            disabled={!selectedBank || files.length === 0 || isProcessing}
            onClick={() => setCurrentStep('convert')}
          >
            NEXT
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white"
            disabled={isProcessing}
          >
            {`This conversion will cost $${totalCost} credits`}
          </Button>
        )}
      </div>
    </div>
  );
}
