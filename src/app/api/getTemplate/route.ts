import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the template path from the query parameters
    const url = new URL(request.url);
    const templatePath = url.searchParams.get('path');

    if (!templatePath) {
      return NextResponse.json(
        { error: 'Template path is required' },
        { status: 400 }
      );
    }

    // Build the absolute path to the template file
    const basePath = process.cwd();
    const fullPath = path.join(basePath, 'src', templatePath);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(
        { error: `Template file not found: ${templatePath}` },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = fs.readFileSync(fullPath);

    // Return the file with the appropriate content type
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="template.docx"`,
      },
    });
  } catch (error) {
    console.error('Error fetching template:', error);
    return NextResponse.json(
      { error: 'Failed to fetch template file' },
      { status: 500 }
    );
  }
} 