import "./alert.css";
import { Icon } from "@iconify/react";

export default function Alert({ status, children }) {
  const getStatus = (status) => {
    switch (status) {
      case "succes":
        return {
          icon: "mdi:alert-circle-success-outline"
        };
      case "fail":
        return {
          icon: "jam:triangle-danger"
        };
      case "warning":
        return {
          icon: "mdi:shield-warning-outline"
        };
      default:
        return status;
    }
  };
  const alertStatus = getStatus(status);
  return (
    <div className={`alert ${status}`}>
      <Icon icon={alertStatus.icon} color={alertStatus.secondaryColor} />
      {children}
    </div>
  );
}
