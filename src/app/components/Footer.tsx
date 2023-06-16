import "./styles.css";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto py-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Column 1</h3>
            <ul>
              <li className="icons">Item 1</li>
              <li className="icons">Item 2</li>
              <li className="icons">Item 3</li>
              <li className="icons">Item 4</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Column 2</h3>
            <ul>
              <li className="icons">Item 1</li>
              <li className="icons">Item 2</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Column 3</h3>
            <ul>
              <li className="icons">Item 1</li>
              <li className="icons">Item 2</li>
              <li className="icons">Item 3</li>
              <li className="icons">Item 4</li>
              <li className="icons">Item 5</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Column 4</h3>
            <ul>
              <li className="icons">Item 1</li>
              <li className="icons">Item 2</li>
              <li className="icons">Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
