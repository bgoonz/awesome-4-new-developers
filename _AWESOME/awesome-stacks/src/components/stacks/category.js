import React from "react"
import StackCard from "./stack-card"

const Category = ({ category }) => {
  const Stacks = category.stacks.map((stack) => (
    <div className="has-margin-top-25 has-margin-bottom-50" key={stack.name}>
      <StackCard stack={stack} />
    </div>
  ))
  return (
    <>
      <div className="has-text-centered">
        <div
          className="has-text-white has-background-info"
          style={{
            padding: "4px 10px",
            display: "inline-block",
            lineHeight: "25px",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          {category.name}
        </div>
      </div>
      {Stacks}
      <div className="has-margin-top-50 has-margin-bottom-50 has-dotted-line" />
    </>
  )
}

export default Category
