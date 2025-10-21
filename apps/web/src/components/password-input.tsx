"use client";

import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
type PasswordInputProps = React.ComponentProps<"input">;

export function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <InputGroup>
      <InputGroupInput
        type={isVisible ? "text" : "password"}
        autoComplete={props.autoComplete ?? "current-password"}
        className={className}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label={isVisible ? "Hide password" : "Show password"}
          title={isVisible ? "Hide password" : "Show password"}
          size="icon-xs"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <Eye /> : <EyeClosed />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
