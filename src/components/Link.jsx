import React from "react";
import { Link } from "react-router-dom";

function LinkComponent(props) {
  if (props.to.startsWith("/") || props.useMarkdownLink) {
    return MarkdownLink(props);
  }
  return ObsidianLink(props);
}

function MarkdownLink(props) {
  return (
    <span className="whitespace-nowrap">
      <Link to={props.to}>
        <span className="text-blue-600 before:content-['['] after:content-[']'] after:text-slate-900 before:text-gray-800 dark:before:text-white dark:after:text-white dark:text-blue-400">
          {props.name}
        </span>
        <span aria-hidden="true" className="text-blue-600 dark:text-blue-400 before:content-['('] after:content-[')'] after:text-slate-900 before:text-gray-800 dark:before:text-white dark:after:text-white">
          {props.to}
        </span>
      </Link>
    </span>
  )
}

function ObsidianLink(props) {
  return (
    <span className="whitespace-nowrap">
      <Link className="text-blue-600 dark:text-blue-400 before:content-['[['] after:content-[']]'] after:text-slate-900 before:text-gray-800 dark:before:text-white dark:after:text-white " to={props.to}>{props.name}</Link>
    </span>
  )
}

export default LinkComponent;
