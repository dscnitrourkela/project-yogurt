import React from 'react';
import Typography from '@/components/Typography';

const TypographyShowcase = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Display Text */}
        <section>
          <Typography.Display>Typography System</Typography.Display>
          <Typography.Lead>
            A comprehensive typography component system with customizable
            Tailwind classes
          </Typography.Lead>
        </section>

        {/* Headings */}
        <section>
          <Typography.H2>Heading Levels</Typography.H2>
          <div className="space-y-4">
            <Typography.H1>Heading 1 - Display Title</Typography.H1>
            <Typography.H2>Heading 2 - Section Title</Typography.H2>
            <Typography.H3>Heading 3 - Subsection</Typography.H3>
            <Typography.H4>Heading 4 - Component Title</Typography.H4>
            <Typography.H5>Heading 5 - Small Section</Typography.H5>
            <Typography.H6>Heading 6 - Minor Heading</Typography.H6>
          </div>
        </section>

        {/* Text Content */}
        <section>
          <Typography.H2>Text Content</Typography.H2>
          <Typography.Lead>
            This is lead text that introduces the section with more emphasis
            than regular paragraphs.
          </Typography.Lead>
          <Typography.P>
            This is a regular paragraph with normal text content. It
            demonstrates the default paragraph styling with proper line height
            and spacing. You can include{' '}
            <Typography.Strong>strong text</Typography.Strong> and
            <Typography.Em> emphasized text</Typography.Em> within paragraphs.
          </Typography.P>
          <Typography.P>
            Here's another paragraph with some{' '}
            <Typography.Code>inline code</Typography.Code> and a
            <Typography.Badge>badge element</Typography.Badge> to show different
            text styles.
          </Typography.P>
          <Typography.Small>
            This is small text for captions or secondary information.
          </Typography.Small>
          <Typography.Muted>
            This is muted text with reduced opacity for less important content.
          </Typography.Muted>
        </section>

        {/* Blockquote */}
        <section>
          <Typography.H2>Blockquote</Typography.H2>
          <Typography.Blockquote>
            "This is a blockquote that can be used for highlighting important
            quotes or testimonials. It includes proper styling with a left
            border and italic text."
          </Typography.Blockquote>
        </section>

        {/* Lists */}
        <section>
          <Typography.H2>Lists</Typography.H2>
          <Typography.H3>Unordered List</Typography.H3>
          <Typography.Ul>
            <Typography.Li>First item in the unordered list</Typography.Li>
            <Typography.Li>Second item with more content</Typography.Li>
            <Typography.Li>Third item to complete the list</Typography.Li>
          </Typography.Ul>

          <Typography.H3>Ordered List</Typography.H3>
          <Typography.Ol>
            <Typography.Li>First numbered item</Typography.Li>
            <Typography.Li>Second numbered item</Typography.Li>
            <Typography.Li>Third numbered item</Typography.Li>
          </Typography.Ol>
        </section>

        {/* Code Block */}
        <section>
          <Typography.H2>Code Examples</Typography.H2>
          <Typography.P>
            Here's an example of inline code:{' '}
            <Typography.Code>const example = 'hello world';</Typography.Code>
          </Typography.P>
          <Typography.Pre>
            {`// Example code block
import Typography from '@/components/Typography';

const MyComponent = () => {
  return (
    <div>
      <Typography.H1>My Title</Typography.H1>
      <Typography.P>My content</Typography.P>
    </div>
  );
};`}
          </Typography.Pre>
        </section>

        {/* Custom Styling Examples */}
        <section>
          <Typography.H2>Custom Styling with cn()</Typography.H2>
          <Typography.P>
            You can customize any typography component by passing additional
            Tailwind classes:
          </Typography.P>

          <Typography.H3 className="text-red-500 underline">
            Customized Heading with Red Color and Underline
          </Typography.H3>

          <Typography.P className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            This paragraph has custom background, padding, and border styling
            applied.
          </Typography.P>

          <Typography.Badge className="bg-green-500 text-white">
            Custom Badge Style
          </Typography.Badge>
        </section>

        {/* Font Variations */}
        <section>
          <Typography.H2>Font Variations</Typography.H2>
          <Typography.P>
            The typography system supports all the custom fonts in your project:
          </Typography.P>

          <Typography.H3 className="font-museo">
            Museo Font Heading
          </Typography.H3>

          <Typography.P className="font-grutch-shaded text-2xl">
            Grutch Shaded Display Text
          </Typography.P>

          <Typography.P className="font-sketch-block text-xl">
            Sketch Block Creative Text
          </Typography.P>

          <Typography.P className="font-wc-rough-trad text-lg">
            WC Rough Traditional Style
          </Typography.P>
        </section>

        {/* Usage Example */}
        <section>
          <Typography.H2>Usage Example</Typography.H2>
          <Typography.Pre>
            {`// Import the Typography component
import Typography from '@/components/Typography';

// Use individual components
<Typography.H1>Page Title</Typography.H1>
<Typography.P>Page content</Typography.P>

// Or use the Typography object
<Typography.Heading level={2}>Section Title</Typography.Heading>

// Apply custom classes
<Typography.H1 className="text-center text-blue-500">
  Centered Blue Title
</Typography.H1>`}
          </Typography.Pre>
        </section>

        <Typography.Caption>
          Typography showcase demonstrating all available components and their
          variations.
        </Typography.Caption>
      </div>
    </div>
  );
};

export default TypographyShowcase;
