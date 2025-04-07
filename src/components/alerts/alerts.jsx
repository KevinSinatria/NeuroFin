import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ReactSwal = withReactContent(Swal);

export const showToast = ({
  title,
  icon = "success",
  position = "top-end",
}) => {
  const Toast = ReactSwal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
};
