import { 
  Loader, 
  MousePointer, 
  FileText, 
  CreditCard, 
  Square, 
  AlertTriangle, 
  Menu, 
  Folder, 
  MessageSquare, 
  Table 
} from "lucide-react";

export const categories = [
  {
    id: "loader",
    name: "Loaders",
    description: "Loading indicators and spinners",
    icon: Loader,
    color: "bg-blue-500"
  },
  {
    id: "button",
    name: "Buttons",
    description: "Interactive button components",
    icon: MousePointer,
    color: "bg-green-500"
  },
  {
    id: "form",
    name: "Form Elements",
    description: "Input fields and form controls",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    id: "card",
    name: "Cards",
    description: "Card layouts and containers",
    icon: CreditCard,
    color: "bg-orange-500"
  },
  {
    id: "modal",
    name: "Modals",
    description: "Dialog boxes and overlays",
    icon: Square,
    color: "bg-indigo-500"
  },
  {
    id: "alert",
    name: "Alerts",
    description: "Notification and alert components",
    icon: AlertTriangle,
    color: "bg-red-500"
  },
  {
    id: "navbar",
    name: "Navbar",
    description: "Navigation bars and menus",
    icon: Menu,
    color: "bg-slate-500"
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Tab navigation components",
    icon: Folder,
    color: "bg-yellow-500"
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Hover information displays",
    icon: MessageSquare,
    color: "bg-pink-500"
  },
  {
    id: "table",
    name: "Table",
    description: "Data table components",
    icon: Table,
    color: "bg-cyan-500"
  }
];

export const allComponents = [
  // Loaders
  {
    id: "loader-vortex",
    name: "LoaderVortex",
    category: "loader",
    description: "A beautiful spinning vortex loader with dual rotating circles. Perfect for loading states in modern applications.",
    code: `const LoaderVortex = () => {
  return (
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoaderVortex;`,
    tags: ["loading", "spinner", "animation"]
  },

  // Buttons
  {
    id: "button-primary",
    name: "Button Primary",
    category: "button",
    description: "A primary action button with hover effects and transitions.",
    code: `const ButtonPrimary = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;`,
    tags: ["primary", "action", "interactive"]
  },
  {
    id: "button-secondary",
    name: "Button Secondary",
    category: "button",
    description: "A secondary button with outline style.",
    code: `const ButtonSecondary = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-slate-700 px-6 py-3 rounded-lg font-medium border border-slate-300 hover:bg-slate-50 transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;`,
    tags: ["secondary", "outline", "interactive"]
  },
  {
    id: "button-destructive",
    name: "Button Destructive",
    category: "button",
    description: "A destructive action button for dangerous operations.",
    code: `const ButtonDestructive = ({ children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDestructive;`,
    tags: ["destructive", "danger", "delete"]
  },

  // Form Elements
  {
    id: "input-field",
    name: "Input Field",
    category: "form",
    description: "A styled input field with label and focus states.",
    code: `const InputField = ({ label, id, type = "text", placeholder, ...props }) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        {...props}
      />
    </div>
  );
};

export default InputField;`,
    tags: ["input", "form", "text"]
  },
  {
    id: "checkbox-form",
    name: "Checkbox Form",
    category: "form",
    description: "A checkbox input with label styling.",
    code: `const CheckboxForm = ({ id, label, checked, onChange, ...props }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        {...props}
      />
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxForm;`,
    tags: ["checkbox", "form", "input"]
  },

  // Cards
  {
    id: "product-card",
    name: "Product Card",
    category: "card",
    description: "A product display card with image, title, and price.",
    code: `const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 max-w-xs">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />
      <h4 className="font-semibold text-slate-800 text-sm mb-1">{title}</h4>
      {description && (
        <p className="text-slate-600 text-xs mb-2">{description}</p>
      )}
      <p className="text-blue-600 font-bold text-sm">{price}</p>
    </div>
  );
};

export default ProductCard;`,
    tags: ["product", "e-commerce", "display"]
  },
  {
    id: "user-card",
    name: "User Card",
    category: "card",
    description: "A user profile card with avatar and information.",
    code: `const UserCard = ({ name, role, avatar, initials }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 max-w-xs">
      <div className="flex items-center space-x-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-slate-800">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;`,
    tags: ["user", "profile", "avatar"]
  },

  // Modals
  {
    id: "confirmation-modal",
    name: "Confirmation Modal",
    category: "modal",
    description: "A confirmation dialog for destructive actions.",
    code: `const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 max-w-xs w-full">
        <h4 className="text-lg font-semibold text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm mb-4">{message}</p>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 bg-slate-100 text-slate-700 px-3 py-2 rounded text-sm font-medium hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;`,
    tags: ["modal", "confirmation", "dialog"]
  },

  // Alerts
  {
    id: "alert-success",
    name: "Alert Success",
    category: "alert",
    description: "A success alert notification component.",
    code: `const AlertSuccess = ({ message, onClose }) => {
  return (
    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg w-full max-w-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{message}</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-green-600 hover:text-green-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertSuccess;`,
    tags: ["alert", "success", "notification"]
  },
  {
    id: "alert-error",
    name: "Alert Error",
    category: "alert",
    description: "An error alert notification component.",
    code: `const AlertError = ({ message, onClose }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg w-full max-w-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{message}</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-red-600 hover:text-red-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertError;`,
    tags: ["alert", "error", "notification"]
  },
  {
    id: "alert-warning",
    name: "Alert Warning",
    category: "alert",
    description: "A warning alert notification component.",
    code: `const AlertWarning = ({ message, onClose }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg w-full max-w-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{message}</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-yellow-600 hover:text-yellow-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertWarning;`,
    tags: ["alert", "warning", "notification"]
  },
  {
    id: "alert-info",
    name: "Alert Info",
    category: "alert",
    description: "An info alert notification component.",
    code: `const AlertInfo = ({ message, onClose }) => {
  return (
    <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg w-full max-w-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">{message}</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-blue-600 hover:text-blue-800">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertInfo;`,
    tags: ["alert", "info", "notification"]
  },

  // Navbar
  {
    id: "simple-navbar",
    name: "Simple Navbar",
    category: "navbar",
    description: "A clean and simple navigation bar component.",
    code: `const SimpleNavbar = ({ brand, links }) => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-blue-500 rounded"></div>
          <span className="font-semibold text-sm">{brand}</span>
        </div>
        <nav className="flex space-x-4 text-sm">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SimpleNavbar;`,
    tags: ["navbar", "navigation", "menu"]
  },

  // Tabs
  {
    id: "basic-tabs",
    name: "Basic Tabs",
    category: "tabs",
    description: "A basic tab navigation component.",
    code: `const BasicTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-full max-w-sm">
      <div className="grid grid-cols-2 bg-slate-100 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={\`px-3 py-2 text-sm font-medium rounded-md transition-all \${
              activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default BasicTabs;`,
    tags: ["tabs", "navigation", "content"]
  },

  // Tooltip
  {
    id: "tooltip-hover",
    name: "Tooltip Hover",
    category: "tooltip",
    description: "A hover-triggered tooltip component.",
    code: `const TooltipHover = ({ children, text, position = "top" }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2"
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div className={\`absolute \${positionClasses[position]} px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10\`}>
        {text}
      </div>
    </div>
  );
};

export default TooltipHover;`,
    tags: ["tooltip", "hover", "overlay"]
  },

  // Table
  {
    id: "data-table",
    name: "Data Table",
    category: "table",
    description: "A simple data table component.",
    code: `const DataTable = ({ headers, data }) => {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left font-medium text-slate-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-slate-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;`,
    tags: ["table", "data", "grid"]
  }
];

export const featuredComponents = allComponents.slice(0, 6);
