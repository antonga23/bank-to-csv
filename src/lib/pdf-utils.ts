import * as PDFJS from 'pdfjs-dist';
import { PDFDocumentProxy, OnProgressParameters } from 'pdfjs-dist';
// import OnProgressParameters from 
// Initialize PDF.js worker
PDFJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.0.375/pdf.min.mjs`;

export interface PDFInfo {
  fileName: string;
  pageCount: number;
}

export async function getPDFPageCount(file: File): Promise<PDFInfo> {
  console.log('Starting getPDFPageCount for file:', file.name);
  try {
    console.log('Converting file to ArrayBuffer');
    const arrayBuffer = await file.arrayBuffer();
    console.log('ArrayBuffer created successfully');

    console.log('Loading PDF document');
    // const pdf = await PDFJS.getDocument({ data: arrayBuffer }).promise;
    const loadingTask = PDFJS.getDocument({ 
      data: arrayBuffer 
    });
    
    // Add progress callback
    loadingTask.onProgress = (progress: OnProgressParameters) => {
      const percent = Math.round((progress.loaded / progress.total) * 100);
      console.log(`Loading progress: ${progress.loaded} / ${progress.total} bytes (${percent}%)`);
    };
    const pdf = await loadingTask.promise;
    console.log('PDF document loaded successfully');

    const result = {
      fileName: file.name,
      pageCount: pdf.numPages
    };
    console.log('Returning PDFInfo:', result);
    return result;
  } catch (error) {
    console.error('Error in getPDFPageCount:', error);
    throw error;
  }
}

export const PRICE_PER_PAGE = 5; // $5 per page

export function calculateTotalCost(totalPages: number): number {
  console.log('Calculating total cost for', totalPages, 'pages');
  const cost = totalPages * PRICE_PER_PAGE;
  console.log('Total cost:', cost);
  return cost;
}
