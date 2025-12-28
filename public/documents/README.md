# 📁 Documents Folder Structure

This folder contains all your academic and professional documents displayed on the portfolio website.

## Folder Structure

```
documents/
├── transcripts/           # Academic transcripts and grade sheets
│   ├── transcript.pdf     # Official transcript
│   └── gradesheet.pdf     # Semester-wise grade breakdown
│
├── lor/                   # Letters of Recommendation
│   ├── lor_professor1.pdf # LOR from Professor 1
│   ├── lor_professor2.pdf # LOR from Professor 2
│   └── lor_industry.pdf   # LOR from Industry Professional
│
├── certificates/          # Professional certifications
│   ├── deep_learning_spec.pdf
│   ├── ml_stanford.pdf
│   ├── tensorflow_dev.pdf
│   ├── aws_cloud.pdf
│   ├── python_ds.pdf
│   └── sql_ds.pdf
│
└── research/              # Research papers and presentations
    ├── object_detection_edge.pdf
    ├── bengali_ocr_ensemble.pdf
    ├── slides_prod_ai.pdf
    └── slides_cv_bangladesh.pdf
```

## How to Add Documents

1. **Transcripts**: Place your official transcript and gradesheet PDFs in the `transcripts/` folder
2. **LORs**: Add letters of recommendation to the `lor/` folder (with recommender's permission)
3. **Certificates**: Add certification PDFs to the `certificates/` folder
4. **Research**: Add research papers and presentation slides to the `research/` folder

## Important Notes

- **File Naming**: Use descriptive, lowercase filenames with underscores (e.g., `transcript_official.pdf`)
- **PDF Format**: All documents should be in PDF format for best compatibility
- **File Size**: Keep files under 5MB each for faster loading
- **Privacy**: Ensure you have permission to share all documents publicly
- **Sensitive Info**: Consider redacting sensitive information (SSN, personal addresses, etc.)

## Updating References

After adding documents, update the corresponding page files:

- **Transcripts**: Update `/src/app/credentials/page.tsx`
- **LORs**: Update `/src/app/recommendations/page.tsx`
- **Certificates**: Update `/src/app/certifications/page.tsx`
- **Research**: Update `/src/app/research/page.tsx`

## Security Considerations

- Documents placed here will be publicly accessible
- Do NOT include documents with sensitive personal information
- For official sealed letters, direct submission is recommended
- Consider watermarking public documents with "For Portfolio Viewing Only"
