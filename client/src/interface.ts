
export interface IProperty{
    name: string; 
    address: string; 
    description: string; 
    image: string; 
    id: string; 
    attributes: ({ trait_type: string; value: number; } | { trait_type: string; value: string; })[]; 
}