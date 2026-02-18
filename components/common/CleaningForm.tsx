"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

interface CleaningFormProps {
  serviceType: string;
}

const roomFurniture: Record<string, string[]> = {
  "Quartos": ["Cama", "Guarda-roupa", "Cômoda", "Criado-mudo", "Escrivaninha"],
  "Sala": ["Sofá", "Mesa de centro", "Estante", "Rack/TV", "Poltrona"],
  "Cozinha": ["Geladeira", "Fogão", "Microondas", "Armários", "Bancada"],
  "Banheiro": ["Box", "Vaso sanitário", "Pia", "Espelho", "Armário"],
};

const CleaningForm = ({ serviceType }: CleaningFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    bedrooms: "1",
    bathrooms: "1",
    kitchens: "1",
    selectedFurniture: [] as string[],
    observations: "",
  });

  const toggleFurniture = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedFurniture: prev.selectedFurniture.includes(item)
        ? prev.selectedFurniture.filter((f) => f !== item)
        : [...prev.selectedFurniture, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cleaning form submitted:", { serviceType, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="font-semibold text-foreground text-sm">Dados Pessoais</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="name" className="text-xs text-muted-foreground">Nome completo</Label>
          <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Seu nome" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefone</Label>
          <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(00) 00000-0000" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs text-muted-foreground">E-mail</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@exemplo.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="address" className="text-xs text-muted-foreground">Endereço</Label>
          <Input id="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Rua, número, bairro" className="mt-1" />
        </div>
      </div>

      <h4 className="font-semibold text-foreground text-sm pt-2">Detalhes do Imóvel</h4>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label htmlFor="bedrooms" className="text-xs text-muted-foreground">Quartos</Label>
          <Input id="bedrooms" type="number" min="0" value={formData.bedrooms} onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="bathrooms" className="text-xs text-muted-foreground">Banheiros</Label>
          <Input id="bathrooms" type="number" min="0" value={formData.bathrooms} onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="kitchens" className="text-xs text-muted-foreground">Cozinhas</Label>
          <Input id="kitchens" type="number" min="0" value={formData.kitchens} onChange={(e) => setFormData({ ...formData, kitchens: e.target.value })} className="mt-1" />
        </div>
      </div>

      <h4 className="font-semibold text-foreground text-sm pt-2">Móveis para limpeza</h4>

      <div className="space-y-3">
        {Object.entries(roomFurniture).map(([room, items]) => (
          <div key={room}>
            <p className="text-xs font-medium text-muted-foreground mb-1.5">{room}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border cursor-pointer transition-colors ${
                    formData.selectedFurniture.includes(item)
                      ? "bg-cleaning-light border-cleaning text-cleaning"
                      : "bg-muted border-border text-muted-foreground hover:border-cleaning/40"
                  }`}
                >
                  <Checkbox
                    checked={formData.selectedFurniture.includes(item)}
                    onCheckedChange={() => toggleFurniture(item)}
                    className="hidden"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Label htmlFor="obs" className="text-xs text-muted-foreground">Observações</Label>
        <Textarea id="obs" value={formData.observations} onChange={(e) => setFormData({ ...formData, observations: e.target.value })} placeholder="Detalhes adicionais sobre o serviço..." className="mt-1" rows={3} />
      </div>

      <button type="submit" className="w-full py-2.5 bg-cleaning text-cleaning-foreground rounded-lg font-semibold text-sm hover:bg-cleaning/90 transition-colors">
        Enviar Solicitação
      </button>
    </form>
  );
};

export default CleaningForm;
