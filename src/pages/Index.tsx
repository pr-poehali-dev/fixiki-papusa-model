import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const metaCharacters = [
    { 
      name: 'Pure Vanilla Cookie', 
      tier: 'S', 
      role: 'Healer',
      emoji: '🍦'
    },
    { 
      name: 'Dark Cacao Cookie', 
      tier: 'S', 
      role: 'Tank',
      emoji: '🍫'
    },
    { 
      name: 'Golden Cheese Cookie', 
      tier: 'S', 
      role: 'DPS',
      emoji: '🧀'
    },
    { 
      name: 'White Lily Cookie', 
      tier: 'A', 
      role: 'Support',
      emoji: '🌸'
    },
    { 
      name: 'Hollyberry Cookie', 
      tier: 'A', 
      role: 'Tank',
      emoji: '🫐'
    },
    { 
      name: 'Frost Queen Cookie', 
      tier: 'A', 
      role: 'DPS',
      emoji: '❄️'
    },
  ];

  const allCharacters = [
    { name: 'Gingerbrave', role: 'Base', emoji: '🍪' },
    { name: 'Strawberry Cookie', role: 'Healer', emoji: '🍓' },
    { name: 'Wizard Cookie', role: 'Magic', emoji: '🧙' },
    { name: 'Custard Cookie III', role: 'Healer', emoji: '🍮' },
    { name: 'Chili Pepper Cookie', role: 'Assassin', emoji: '🌶️' },
    { name: 'Espresso Cookie', role: 'Magic', emoji: '☕' },
    { name: 'Madeleine Cookie', role: 'Defense', emoji: '⚔️' },
    { name: 'Sea Fairy Cookie', role: 'Magic', emoji: '🧚' },
    { name: 'Vampire Cookie', role: 'DPS', emoji: '🧛' },
    { name: 'Mint Choco Cookie', role: 'Support', emoji: '🎵' },
    { name: 'Parfait Cookie', role: 'Healer', emoji: '🍨' },
    { name: 'Sorbet Shark Cookie', role: 'Ambush', emoji: '🦈' },
  ];

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'S': return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'A': return 'bg-gradient-to-r from-purple-400 to-purple-600';
      case 'B': return 'bg-gradient-to-r from-blue-400 to-blue-600';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#2D1B69] to-[#06B6D4] font-inter">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-orbitron font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              COOKIE RUN KINGDOM
            </h1>
            <div className="flex gap-2">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="font-orbitron"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeSection === 'meta' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('meta')}
                className="font-orbitron"
              >
                <Icon name="Crown" size={18} className="mr-2" />
                Мета
              </Button>
              <Button 
                variant={activeSection === 'characters' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('characters')}
                className="font-orbitron"
              >
                <Icon name="Users" size={18} className="mr-2" />
                Персонажи
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-4 space-y-12 animate-fade-in">
            <section className="text-center py-20">
              <div className="inline-block mb-6">
                <Badge className="text-xl px-6 py-2 bg-gradient-to-r from-primary to-accent font-orbitron">
                  🍪 META 2025
                </Badge>
              </div>
              <h2 className="text-6xl md:text-8xl font-orbitron font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                COOKIE RUN
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Актуальная информация о мете, персонажах и стратегиях игры
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👑</div>
                <h3 className="text-2xl font-orbitron font-bold mb-2">Актуальная Мета</h3>
                <p className="text-muted-foreground">Топ персонажей для PvP и PvE контента</p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur border-secondary/30 hover:border-secondary transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚔️</div>
                <h3 className="text-2xl font-orbitron font-bold mb-2">Гайды</h3>
                <p className="text-muted-foreground">Подробные стратегии и билды</p>
              </Card>
              
              <Card className="p-6 bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎮</div>
                <h3 className="text-2xl font-orbitron font-bold mb-2">Обновления</h3>
                <p className="text-muted-foreground">Последние патчи и изменения</p>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'meta' && (
          <div className="container mx-auto px-4 space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                МЕТА ПЕРСОНАЖИ
              </h2>
              <p className="text-xl text-muted-foreground">Топовые печеньки текущего сезона</p>
            </div>

            <div className="mb-8 flex justify-center gap-4">
              <Badge className={`${getTierColor('S')} text-lg px-6 py-2 font-orbitron`}>S TIER</Badge>
              <Badge className={`${getTierColor('A')} text-lg px-6 py-2 font-orbitron`}>A TIER</Badge>
              <Badge className={`${getTierColor('B')} text-lg px-6 py-2 font-orbitron`}>B TIER</Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metaCharacters.map((character, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-2 hover:scale-105 transition-all cursor-pointer relative overflow-hidden group"
                  style={{
                    borderColor: character.tier === 'S' ? 'rgba(250, 204, 21, 0.5)' : 'rgba(168, 85, 247, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{character.emoji}</div>
                      <Badge className={`${getTierColor(character.tier)} font-orbitron text-lg px-3 py-1`}>
                        {character.tier}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-orbitron font-bold mb-2">{character.name}</h3>
                    <p className="text-muted-foreground">{character.role}</p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'characters' && (
          <div className="container mx-auto px-4 space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                ВСЕ ПЕРСОНАЖИ
              </h2>
              <p className="text-xl text-muted-foreground">Полная коллекция печенек</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {allCharacters.map((character, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur border-primary/20 hover:border-primary hover:scale-105 transition-all cursor-pointer group"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                      {character.emoji}
                    </div>
                    <h4 className="font-orbitron font-semibold text-sm mb-1">{character.name}</h4>
                    <p className="text-xs text-muted-foreground">{character.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-primary/20 py-8 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-orbitron">
            © 2025 COOKIE RUN KINGDOM META | Создано на poehali.dev 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
