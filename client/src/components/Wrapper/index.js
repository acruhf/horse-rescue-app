import React from 'react';

// Create and export wrapper component
export default function Wrapper(props) {
    return <main className="p-2">{props.children}</main>
  }
