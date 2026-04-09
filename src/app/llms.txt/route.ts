export const dynamic = "force-static";

export async function GET() {
  const content = `# Porte Sectionnelle Paris
> Specialiste de la porte sectionnelle a Paris et Ile-de-France

## Services
- Installation de porte sectionnelle
- Depannage 24h/24
- Reparation
- Entretien et maintenance
- Motorisation

## Produits
- Porte de garage basculante
- Porte de garage enroulable
- Porte sectionnelle industrielle
- Porte souple rapide
- Rideau metallique industriel

## Contact
- Telephone: 09 72 12 41 41
- Email: contact@porte-sectionnelle-paris.fr
- Site: https://porte-sectionnelle-paris.fr
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain' } });
}
