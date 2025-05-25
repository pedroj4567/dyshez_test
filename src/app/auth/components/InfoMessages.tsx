export type InfoMessageProps = {
  message: string;
  containerClassName?: string;
  textClassName?: string;
  defaultContainerClasses?: string;
  defaultTextClasses?: string;
};

const InfoMessages = ({
  message,
  containerClassName = "",
  textClassName = "",
  defaultContainerClasses = "py-3 px-10 mt-5 mb-8",
  defaultTextClasses = "text-base  text-black",
}: InfoMessageProps) => {
  return (
    <div className={`${defaultContainerClasses} ${containerClassName}`}>
      <p className={`${defaultTextClasses} ${textClassName} `}>{message}</p>
    </div>
  );
};

export default InfoMessages;
