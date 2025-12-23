import React from 'react'

const Button = ({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "success" | "danger";
}) => {
  const styles = {
    primary: "bg-ts-primary",
    success: "bg-ts-success",
    danger: "bg-ts-danger",
  };

  return (
      <button
        className={`${styles[variant]} px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition`}
      >
        {children}
      </button>
  )
}


export default Button
