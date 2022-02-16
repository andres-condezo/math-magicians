import './Quote.css';

const Quote = () => {
  const quote = 'Mathematics is not about numbers equations, computations, or algorithms. It is about undersatanding.';
  const author = '-William paul Thurston';

  return (
    <div className="quote-container">
      <p>{quote}</p>
      <span>{author}</span>
    </div>
  );
};

export default Quote;
