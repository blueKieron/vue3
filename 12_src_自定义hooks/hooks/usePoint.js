import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function handlerClick(e) {
    point.x = e.pageX;
    point.y = e.pageY;
  }
  onMounted(() => {
    window.addEventListener("click", handlerClick);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", handlerClick);
  });

  return point;
}
