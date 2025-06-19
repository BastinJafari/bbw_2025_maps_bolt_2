# 🚀 Hackathon Starter Template

**The perfect foundation for your next hackathon project!**

Built for rapid prototyping and vibe coding with modern web technologies.

## ✨ What's Included

- **Next.js 15** with App Router - Latest React framework
- **TypeScript** - Type safety without the hassle
- **Tailwind CSS** - Utility-first styling that just works
- **Shadcn/ui** - Beautiful, accessible components out of the box
- **NextAuth.js** - Authentication made simple
- **Mock Database** - Start coding immediately, no setup required
- **Responsive Design** - Looks great on all devices

## 🎯 Perfect For

- **Hackathons** - Get up and running in minutes
- **Prototypes** - Rapid iteration and experimentation
- **Learning** - Modern web development patterns
- **MVPs** - Solid foundation for real products

## 🚀 Quick Start

1. **Clone this template in Bolt**
2. **Start the dev server** - It's already running!
3. **Start building** - Everything is set up and ready to go

## 🛠 What You Get

### Pre-built Components
- Navigation with mobile support
- User authentication flow
- Responsive layouts
- Data tables with pagination
- Search functionality
- Modal dialogs and dropdowns

### Mock Data System
- No database setup required
- Easy to modify and extend
- Perfect for prototyping
- Switch to real database when ready

### Styling System
- Tailwind CSS configured
- Dark/light mode ready
- Consistent design tokens
- Mobile-first responsive design

## 🎨 Customization

### Colors & Theming
Edit `app/globals.css` to change the color scheme:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* Add your brand colors */
}
```

### Layout & Navigation
Modify `app/(dashboard)/layout.tsx` to change:
- Navigation items
- Logo and branding
- Layout structure

### Mock Data
Update `lib/db.ts` to change:
- Data structure
- Sample content
- API responses

## 🔧 Common Patterns

### Adding New Pages
```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My New Page</h1>
    </div>
  );
}
```

### Creating Components
```tsx
// components/my-component.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
}
```

### Using Mock Data
```tsx
// lib/my-data.ts
export const myMockData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// In your component
import { myMockData } from '@/lib/my-data';
```

## 🎯 Hackathon Tips

1. **Start with the layout** - Modify the navigation and basic structure first
2. **Use mock data** - Don't waste time on database setup during a hackathon
3. **Leverage existing components** - Remix and reuse what's already built
4. **Focus on your unique idea** - The boring stuff is already done
5. **Mobile-first** - The responsive design is already there

## 🚀 Ready to Ship?

When you're ready to deploy:
- All components are production-ready
- TypeScript ensures code quality
- Responsive design works everywhere
- Easy to connect real databases later

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [NextAuth.js](https://authjs.dev)

---

**Happy hacking! 🎉**

*Built with ❤️ for the developer community*