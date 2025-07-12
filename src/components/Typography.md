# Typography Component System

A comprehensive typography component system built with React and Tailwind CSS, featuring customizable styling through the `cn` utility function.

## Installation

The component uses `clsx` and `tailwind-merge` for class name management:

```bash
yarn add clsx tailwind-merge
```

## Features

- **Complete Typography Set**: H1-H6, paragraphs, lists, code blocks, and more
- **Responsive Design**: Built-in responsive typography scaling
- **Custom Font Support**: Integrates with your project's custom fonts
- **Flexible Styling**: Use `cn()` utility for easy class customization
- **TypeScript Support**: Fully typed components with IntelliSense
- **CSS Variables**: Uses CSS custom properties for theming

## Components

### Headings

- `<Typography.H1>` - `<Typography.H6>`: Individual heading components
- `<Typography.Heading level={1-6}>`: Generic heading component with level prop
- `<Typography.Display>`: Extra large display text

### Text Elements

- `<Typography.P>`: Regular paragraph text
- `<Typography.Lead>`: Lead/intro paragraph text
- `<Typography.Small>`: Small text
- `<Typography.Muted>`: Muted/secondary text
- `<Typography.Strong>`: Bold text
- `<Typography.Em>`: Italic text

### Code Elements

- `<Typography.Code>`: Inline code
- `<Typography.Pre>`: Code blocks

### Lists

- `<Typography.Ul>`: Unordered list
- `<Typography.Ol>`: Ordered list
- `<Typography.Li>`: List item

### Special Elements

- `<Typography.Blockquote>`: Quote blocks
- `<Typography.Badge>`: Badge/tag elements
- `<Typography.Caption>`: Caption text

## Usage

### Basic Usage

```tsx
import Typography from '@/components/Typography';

function MyComponent() {
  return (
    <div>
      <Typography.H1>Page Title</Typography.H1>
      <Typography.Lead>
        This is a lead paragraph that introduces the content.
      </Typography.Lead>
      <Typography.P>
        This is regular paragraph text with{' '}
        <Typography.Strong>bold</Typography.Strong> and
        <Typography.Em>italic</Typography.Em> text.
      </Typography.P>
    </div>
  );
}
```

### Custom Styling

Use the `className` prop to apply custom Tailwind classes:

```tsx
<Typography.H1 className="text-center text-blue-500 mb-8">
  Centered Blue Title
</Typography.H1>

<Typography.P className="bg-gray-100 p-4 rounded-lg">
  Paragraph with custom background and padding
</Typography.P>
```

### Font Variations

Apply custom fonts from your project:

```tsx
<Typography.H1 className="font-museo">
  Title with Museo Font
</Typography.H1>

<Typography.P className="font-grutch-shaded text-2xl">
  Display text with Grutch Shaded
</Typography.P>
```

### Lists

```tsx
<Typography.Ul>
  <Typography.Li>First item</Typography.Li>
  <Typography.Li>Second item</Typography.Li>
  <Typography.Li>Third item</Typography.Li>
</Typography.Ul>
```

### Code Examples

```tsx
<Typography.P>
  Here's some inline code: <Typography.Code>const x = 5;</Typography.Code>
</Typography.P>

<Typography.Pre>
{`function example() {
  return "Hello World";
}`}
</Typography.Pre>
```

## Responsive Design

All typography components include responsive scaling:

```tsx
// H1 scales from text-5xl on mobile to text-7xl on large screens
<Typography.H1>Responsive Heading</Typography.H1>
```

## Theming

The components use CSS custom properties for colors:

- `--color-heading`: Primary text color
- `--color-subheading`: Secondary text color
- `--color-primary`: Brand primary color
- `--color-primary-soft`: Light brand color
- `--color-background`: Background color
- `--color-border`: Border color
- `--color-gray-50`: Light gray background
- `--color-gray-100`: Medium gray background

## TypeScript Support

All components are fully typed:

```tsx
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
```

## Available Fonts

The system supports these custom fonts:

- `font-averta-std` (default)
- `font-museo`
- `font-grutch-shaded`
- `font-sketch-block`
- `font-wc-rough-trad`
- `font-cabin-sketch`

## Examples

Visit `/typography` route to see a comprehensive showcase of all typography components in action.
