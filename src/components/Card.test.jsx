import { render, screen } from '@testing-library/react';
import Card from './Card';
import { BookOpen } from 'lucide-react';


export default Card.test
describe('Card Component', () => {
  test('renders with title and description', () => {
    render(<Card title="Test Title" description="Test description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  test('renders with icon', () => {
    render(<Card title="Icon Test" description="With Icon" icon={BookOpen} />);
    expect(screen.getByRole('region', { name: /icon test/i })).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(
      <Card title="Child Test" description="Has children">
        <button>Click Me</button>
      </Card>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});