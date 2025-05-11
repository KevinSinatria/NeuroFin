<<<<<<< HEAD
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ReactSwal = withReactContent(Swal);

export const showToast = ({
  title,
  icon = "success",
  position = "top-end",
  timer = 4000,
}) => {
  const Toast = ReactSwal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
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
=======
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ReactSwal = withReactContent(Swal);

export const showToast = ({
  title,
  icon = "success",
  position = "top-end",
  timer = 4000,
}) => {
  const Toast = ReactSwal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
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
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
