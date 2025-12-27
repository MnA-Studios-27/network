import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface JourneyStage {
  id: number;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}