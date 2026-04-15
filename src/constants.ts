import { Product, MaterialOption, ColorOption } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Motor em Miniatura',
    price: 120.00,
    category: 'Gadgets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuzSHaOztcC5YUcWeEuaqLwLk93ssfQeA3TRZmHOaYiRtxIlrq_T6U-Nd2S7Ee6ZoyPHEp_vWzI67hikClDY8nIYPDHtqpT8xzkEfUw3OguPQ1WRBxYaUqiul0YsRPuCm2MVGRwvl3UBZ40J2O_5U93aOYSFjwIrzJwYeRlz4LLyb9v4u7nqT59N6zGoHGR5CQo885Aadx34837vMEHYIeZIpU6Y_-hc7tg1fLXLYkX9eeZ6R8WbgTgZ_mgZROC8MIqW2jqeV6Kbnp',
    description: 'Brinquedo mecânico de mesa impresso em 3D minimalista e elegante.',
    rating: 4.8,
    reviews: 45,
    tags: ['Mecânico', 'Desktop'],
    isQuickShip: true
  },
  {
    id: '2',
    name: 'Suporte para Fone',
    price: 175.00,
    category: 'Gadgets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDueV7TshbH2Cco8rRCykpTWkBlFVLfQgoJHoHrLIz6yOjoC5uHhChRojNGIDRo57tdAVvjCnihqVnMCPw1qJnu1Ugxg0Msce43leFPkPaE28ExdmYddYVb9VQmOqLkLSRFkuyTCQRaIVL7QO60aA6NEL864Lp8Pb70AHclKqseQKb13DM0UHBSNxs7PuoTw-6RB4cl4VMlzyy6C_nNPt72csTUiYltVq4Fp0Ablpd_JIY1GURySRkgfmNqM8CKGIG2rzX19o9LHbaR',
    description: 'Suporte para fone de ouvido impresso em 3D preto fosco com estrutura orgânica.',
    rating: 4.9,
    reviews: 82,
    tags: ['Setup', 'Organização'],
    isQuickShip: true
  },
  {
    id: '3',
    name: 'Vaso Low-poly',
    price: 99.99,
    oldPrice: 125.00,
    category: 'Decoração',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXV-pQ1qjLtgzFCH_fq5N7a9SF4C_PeLQJPmuBJvQgIYQX-i8oNRHxTe5kuY0LcwyqQAPG979W3vuMccvI5GOWsa7LFm-zXOInrrhgVTULGoYLi07XhIqGm7XG1w0Wg1pt5TO-EYQ5sKDd4MAnwfLHzyXaayeEvzWvVXFHocdrt6jsHGncCq_udoT8ykXFMUnBZxPCQTd-xsCLz8gZGcN1qvbVHv8PPDbzcmMg-NdFSB2vnAtuxp98vw7uKft8zr80EJEQhWOP2at_',
    description: 'Estética geométrica moderna para suas plantas.',
    rating: 4.7,
    reviews: 112,
    tags: ['Minimalista', 'Home'],
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Dragão Articulado',
    price: 145.00,
    category: 'Articulados',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqr8VJ32SRJ6iO7sM-5Lg3hkUUW4yXI4GRlw7EsaBXKD2EZU0_L9liQPxo2UTLiQ1of7eVMe03VSVSdQbpXsrOk73Qhr9wt8Uk44vxJoZRvitUu7uLJirFwXC8iTwX4gUFdIvWfSQDeNLDMYuZicwzEtXIL6f8iwnDKjTZiNNhitiK7tbZq2HA9gFoWvTttZesChrSlLHFvwgfYtcXIKWF79QDnxF-GhiF-k2zRSFbU40YZpjwZm4Z4t9azfext2if7WRSCvvFltJc',
    description: 'Flexibilidade de alto detalhe e movimento fluido.',
    rating: 5.0,
    reviews: 230,
    tags: ['Colecionável', 'Fidget'],
  },
  {
    id: '5',
    name: 'Prateleira Hexagonal',
    price: 29.90,
    category: 'Decoração',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRXeV9Xk32jPeK_guwhsh0myK6k9giJKV1YhqgOUjNAJCI47rUEpH6AN0xYImgiJ9QWPS1EBhhmtqz4vemu71AlZuzyOU5r5rY_OiQmnDqz2EyUeFuleYt_oEUt-c8atBaCGpXu18ey52R4SAGPw-QkqLy4PeYmk1c11XX6n_Jn9kzJVbA_psLY3TTFOjsKf0PNRpT14S-GGF3N0vFyfiA6bg2wLIq4d4jqLoV3Iufrc5yysSf0rLL_txs8bZrjTbqMi7oRRLuIRyD',
    description: 'Ideal para organizar pequenos itens em sua parede com um toque moderno.',
    rating: 4.9,
    reviews: 124,
    tags: ['PLA+', 'Preto Fosco'],
    isQuickShip: true,
    isBestSeller: true
  },
  {
    id: '6',
    name: 'Polvo Organizador',
    price: 12.00,
    category: 'Organizadores',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL9fPCqOefgvtVsQ9fuLsXUTXKXdRc5tzsJTh3DU0NwpYv2XsDGZ4NltSRTOrYnDVf8fas4y7ziopX9FbJTyunWXoDyy79YK5U4pBzYQNM8w0eCGsn6LmokiOwZTCOFQID2I3DS_rZ3Ub_qAwx5LsFFdpHkCfXu1Ph6trtq24gaLf94Q-2h3i2B4jMPpCjpTlkVN1TWu-yw1aH7zoJfNnZJHMOaxs7yLmpEmbi1HQbkoDwIP7LM-vOL9RY4Psz_epXC4QRyd2detuq',
    description: 'Playful 3D printed octopus with articulated legs holding various cables.',
    rating: 5.0,
    reviews: 210,
    tags: ['PETG', 'Flexível'],
    isQuickShip: true
  }
];

export const MATERIALS: MaterialOption[] = [
  {
    id: 'PLA',
    name: 'Padrão (PLA)',
    description: 'Resistente e Ecológico',
    icon: 'Leaf',
    benefits: 'O PLA é ideal para decoração, prototipagem rápida e modelos visuais não funcionais.'
  },
  {
    id: 'PETG',
    name: 'Externo (PETG)',
    description: 'Durável e Resistente a UV',
    icon: 'Wrench',
    benefits: 'O PETG combina a facilidade do PLA com a resistência do ABS.'
  },
  {
    id: 'Resina',
    name: 'Resina (SLA)',
    description: 'Extremo detalhamento e acabamento liso',
    icon: 'FlaskConical',
    benefits: 'Ideal para miniaturas e peças que exigem precisão milimétrica.'
  }
];

export const COLORS: ColorOption[] = [
  { id: 'onyx', name: 'Onyx Meia-noite', hex: '#1A1F2C' },
  { id: 'white', name: 'Branco Mármore', hex: '#FFFFFF' },
  { id: 'red', name: 'Rubi Vibrante', hex: '#E11D48' },
  { id: 'blue', name: 'Azul Cobalto', hex: '#2563EB' },
  { id: 'green', name: 'Verde Floresta', hex: '#16A34A' },
  { id: 'orange', name: 'Âmbar Solar', hex: '#F59E0B' }
];
