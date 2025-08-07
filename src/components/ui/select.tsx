"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from "react";

type SelectContextType = {
  selected: string | null;
  setSelected: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export function Select({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider
      value={{ selected, setSelected, isOpen, setIsOpen }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used inside Select");

  const { isOpen, setIsOpen } = context;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex justify-between items-center px-4 py-2 border rounded-md w-full text-left ${className}`}
    >
      {children}
      <span className="ml-2">&#9662;</span> {/* Down Arrow */}
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used inside Select");

  const { selected } = context;

  return (
    <span>
      {selected || <span className="text-gray-400">{placeholder}</span>}
    </span>
  );
}

export function SelectContent({ children }: { children: ReactNode }) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used inside Select");

  const { isOpen } = context;

  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow">
      {children}
    </div>
  );
}

export function SelectItem({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used inside Select");

  const { setSelected, setIsOpen } = context;

  const handleClick = () => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
