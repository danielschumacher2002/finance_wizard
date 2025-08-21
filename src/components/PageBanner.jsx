export default function PageBanner({ path }) {
  return (
    <div
      className="bg-secondary rounded-sm
                                flex items-center justify-center"
    >
      <svg
        className="fill-primary
                                    size-1/4
                                    m-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com
                            License - https://fontawesome.com/license/free Copyright 2025
                            Fonticons, Inc.*/}
        <path d={path} />
      </svg>
    </div>
  );
}
