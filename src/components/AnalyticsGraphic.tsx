import { TrendingUp, BarChart3, Activity, PieChart } from "lucide-react";

export const AnalyticsGraphic = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-secondary/10 rounded-full animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Main chart container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Animated bars */}
        <div className="flex items-end justify-between gap-4 h-64 mb-8">
          {[65, 45, 80, 55, 90, 70].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full rounded-t-lg transition-all duration-1000 relative overflow-hidden"
                style={{ 
                  height: `${height}%`,
                  background: `linear-gradient(180deg, hsl(var(--gradient-crimson)), hsl(var(--gradient-burgundy)))`,
                  animation: `slideUp 2s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 animate-pulse" />
              </div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
            </div>
          ))}
        </div>

        {/* Floating metric cards */}
        <div className="absolute top-0 right-0 bg-card border border-border rounded-lg p-3 shadow-lg animate-fade-in"
             style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Revenue</div>
              <div className="text-sm font-bold text-foreground">+24.5%</div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-0 bg-card border border-border rounded-lg p-3 shadow-lg animate-fade-in"
             style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent" />
            <div>
              <div className="text-xs text-muted-foreground">Transactions</div>
              <div className="text-sm font-bold text-foreground">15.2K</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-8 bg-card border border-border rounded-lg p-3 shadow-lg animate-fade-in"
             style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-secondary" />
            <div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
              <div className="text-sm font-bold text-foreground">99.8%</div>
            </div>
          </div>
        </div>

        {/* Animated line graph overlay */}
        <svg className="absolute top-32 left-0 w-full h-32 opacity-40" viewBox="0 0 200 50">
          <path
            d="M 0,40 Q 50,10 100,25 T 200,15"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            className="animate-pulse"
            style={{ 
              strokeDasharray: '400',
              strokeDashoffset: '400',
              animation: 'drawLine 3s ease-out forwards'
            }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
