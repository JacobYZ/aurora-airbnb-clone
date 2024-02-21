"use client";
import { useEffect } from "react";
import EmptyState from "./components/EmptyState";
interface ErrorProps {
  error: Error;
}

const ErrorState: React.FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState
      title="An error occurred"
      subtitle={error.message}
    />
  );
};
export default ErrorState;
