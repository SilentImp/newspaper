declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module "csvjson" {
  const csvjson: {
    toObject: (data: unknown, options: unknown) => unknown;
  };
  export default csvjson;
}
