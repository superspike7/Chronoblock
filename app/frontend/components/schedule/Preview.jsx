import React from "react";

const Preview = () => {
  return (
    <div className="bg-base-100 p-16 flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-bold">Title:</h3>
        <p className="text-2xl">Chronoblock development</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Status:{" "}
          <span className="badge badge-lg badge-accent">
            TODO
          </span>
        </h3>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Schedule:</h3>
        <p className="text-lg">
          05:30AM - 6:30AM
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Type: <span className="badge badge-accent badge-lg">DEEPWORK</span>
        </h3>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Description:</h3>
        <p className="text-lg">
          Create the initial "Stateless" User Interface of the app. Copy what's
          on the sketch and implement it using Taliwindcss.
        </p>
      </div>

      <button className="btn btn-outline">Edit</button>
    </div>
  );
};

export default Preview;
