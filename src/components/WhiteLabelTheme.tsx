
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Palette, Eye, Download, Upload, RotateCcw } from 'lucide-react';

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  logo: string;
  companyName: string;
  brandFont: string;
  borderRadius: number;
  customCSS: string;
}

interface WhiteLabelThemeProps {
  currentTheme: ThemeConfig;
  onThemeChange: (theme: ThemeConfig) => void;
  onPreview: () => void;
  onSave: () => void;
  onReset: () => void;
}

const WhiteLabelTheme = ({
  currentTheme,
  onThemeChange,
  onPreview,
  onSave,
  onReset
}: WhiteLabelThemeProps) => {
  const [theme, setTheme] = useState<ThemeConfig>(currentTheme);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  const handleColorChange = (property: keyof ThemeConfig, value: string | number) => {
    const updatedTheme = { ...theme, [property]: value };
    setTheme(updatedTheme);
    onThemeChange(updatedTheme);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const logoUrl = e.target?.result as string;
        handleColorChange('logo', logoUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const exportTheme = () => {
    const dataStr = JSON.stringify(theme, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${theme.companyName.toLowerCase().replace(/\s+/g, '-')}-theme.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTheme = JSON.parse(e.target?.result as string);
          setTheme(importedTheme);
          onThemeChange(importedTheme);
        } catch (error) {
          console.error('Invalid theme file');
        }
      };
      reader.readAsText(file);
    }
  };

  const presetThemes = [
    {
      name: 'Corporate Blue',
      config: {
        primaryColor: '#1e40af',
        secondaryColor: '#3b82f6',
        accentColor: '#60a5fa',
        backgroundColor: '#f8fafc',
        textColor: '#1e293b'
      }
    },
    {
      name: 'Tech Green',
      config: {
        primaryColor: '#059669',
        secondaryColor: '#10b981',
        accentColor: '#34d399',
        backgroundColor: '#f0fdf4',
        textColor: '#064e3b'
      }
    },
    {
      name: 'Modern Purple',
      config: {
        primaryColor: '#7c3aed',
        secondaryColor: '#8b5cf6',
        accentColor: '#a78bfa',
        backgroundColor: '#faf5ff',
        textColor: '#581c87'
      }
    },
    {
      name: 'Elegant Gray',
      config: {
        primaryColor: '#374151',
        secondaryColor: '#6b7280',
        accentColor: '#9ca3af',
        backgroundColor: '#f9fafb',
        textColor: '#111827'
      }
    }
  ];

  const applyPreset = (preset: any) => {
    const updatedTheme = { ...theme, ...preset.config };
    setTheme(updatedTheme);
    onThemeChange(updatedTheme);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-zara-purple" />
              White Label Theming
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onPreview}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button onClick={onSave} className="bg-zara-purple hover:bg-zara-purple-dark">
                Save Theme
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme Configuration */}
        <div className="space-y-6">
          {/* Company Branding */}
          <Card>
            <CardHeader>
              <CardTitle>Company Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={theme.companyName}
                  onChange={(e) => handleColorChange('companyName', e.target.value)}
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <Label htmlFor="logo">Company Logo</Label>
                <div className="flex gap-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="flex-1"
                  />
                  {theme.logo && (
                    <img src={theme.logo} alt="Logo" className="w-10 h-10 object-contain" />
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="brandFont">Brand Font</Label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={theme.brandFont}
                  onChange={(e) => handleColorChange('brandFont', e.target.value)}
                >
                  <option value="Inter">Inter</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open Sans">Open Sans</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Poppins">Poppins</option>
                  <option value="Lato">Lato</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Color Scheme */}
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      id="primaryColor"
                      value={theme.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="w-12 h-10 rounded border"
                    />
                    <Input
                      value={theme.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      placeholder="#000000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="secondaryColor">Secondary Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      id="secondaryColor"
                      value={theme.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      className="w-12 h-10 rounded border"
                    />
                    <Input
                      value={theme.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      placeholder="#000000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      id="accentColor"
                      value={theme.accentColor}
                      onChange={(e) => handleColorChange('accentColor', e.target.value)}
                      className="w-12 h-10 rounded border"
                    />
                    <Input
                      value={theme.accentColor}
                      onChange={(e) => handleColorChange('accentColor', e.target.value)}
                      placeholder="#000000"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      id="backgroundColor"
                      value={theme.backgroundColor}
                      onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                      className="w-12 h-10 rounded border"
                    />
                    <Input
                      value={theme.backgroundColor}
                      onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                      placeholder="#ffffff"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="borderRadius">Border Radius: {theme.borderRadius}px</Label>
                <input
                  type="range"
                  id="borderRadius"
                  min="0"
                  max="20"
                  value={theme.borderRadius}
                  onChange={(e) => handleColorChange('borderRadius', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="customCSS">Custom CSS</Label>
                <textarea
                  id="customCSS"
                  value={theme.customCSS}
                  onChange={(e) => handleColorChange('customCSS', e.target.value)}
                  placeholder="/* Add your custom CSS here */"
                  className="w-full h-32 p-2 border border-gray-300 rounded-md font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>

          {/* Import/Export */}
          <Card>
            <CardHeader>
              <CardTitle>Import/Export</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button variant="outline" onClick={exportTheme}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Theme
                </Button>
                <label className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      Import Theme
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept=".json"
                    onChange={importTheme}
                    className="hidden"
                  />
                </label>
                <Button variant="outline" onClick={onReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview and Presets */}
        <div className="space-y-6">
          {/* Color Presets */}
          <Card>
            <CardHeader>
              <CardTitle>Color Presets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {presetThemes.map((preset) => (
                  <div
                    key={preset.name}
                    className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => applyPreset(preset)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: preset.config.primaryColor }}
                      ></div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: preset.config.secondaryColor }}
                      ></div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: preset.config.accentColor }}
                      ></div>
                    </div>
                    <p className="text-sm font-medium">{preset.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Live Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="p-6 rounded-lg border-2 min-h-64"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.textColor,
                  fontFamily: theme.brandFont,
                  borderRadius: `${theme.borderRadius}px`
                }}
              >
                {/* Preview Header */}
                <div className="flex items-center gap-3 mb-4">
                  {theme.logo && (
                    <img src={theme.logo} alt="Logo" className="w-8 h-8 object-contain" />
                  )}
                  <h3 
                    className="text-lg font-bold"
                    style={{ color: theme.primaryColor }}
                  >
                    {theme.companyName || 'Your Company'}
                  </h3>
                </div>

                {/* Preview Content */}
                <div className="space-y-3">
                  <div
                    className="px-4 py-2 rounded text-white font-medium"
                    style={{ 
                      backgroundColor: theme.primaryColor,
                      borderRadius: `${theme.borderRadius}px`
                    }}
                  >
                    Primary Button
                  </div>
                  
                  <div
                    className="px-4 py-2 rounded border font-medium"
                    style={{ 
                      borderColor: theme.secondaryColor,
                      color: theme.secondaryColor,
                      borderRadius: `${theme.borderRadius}px`
                    }}
                  >
                    Secondary Button
                  </div>
                  
                  <div
                    className="p-3 rounded"
                    style={{ 
                      backgroundColor: theme.accentColor + '20',
                      borderRadius: `${theme.borderRadius}px`
                    }}
                  >
                    <span style={{ color: theme.accentColor }}>
                      Accent highlight text and components
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelTheme;
