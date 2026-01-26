import React, { useState } from 'react';
import { Box, Button, FormGroup, Label } from '@adminjs/design-system';

interface GalleryImageUploaderProps {
  onChange: (files: File[]) => void;
  value?: File[];
}

export const GalleryImageUploader: React.FC<GalleryImageUploaderProps> = ({
  onChange,
  value = [],
}) => {
  const [files, setFiles] = useState<File[]>(value);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  return (
    <FormGroup>
      <Label>Carregar Múltiplas Imagens</Label>
      <Box my="lg">
        <input
          onChange={handleFileChange}
          multiple
          accept="image/*"
        />
      </Box>
      {files.length > 0 && (
        <Box mt="lg">
          <Label>Imagens Selecionadas: {files.length}</Label>
          <Box mt="md">
            {files.map((file, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py="sm"
                px="md"
                mb="xs"
                style={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }}
              >
                <span>{file.name}</span>
                <Button
                  size="sm"
                  kind="danger"
                  onClick={() => handleRemoveFile(index)}
                >
                  Remover
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </FormGroup>
  );
};

export default GalleryImageUploader;
