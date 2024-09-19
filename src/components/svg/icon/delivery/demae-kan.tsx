import React from 'react';
import { IconProps } from '@/types/element-prop';

const DemaeKanIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '20px', height: '20px' }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="20" height="20" rx="10" fill="url(#pattern0_2656_928)"/>
        <defs>
        <pattern id="pattern0_2656_928" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_2656_928" transform="scale(0.0025)"/>
        </pattern>
        <image id="image0_2656_928" width="400" height="400" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABkKADAAQAAAABAAABkAAAAAAbMW/MAAApZklEQVR4Ae2dTYwexZnHjb8G4xljIIDHQYQomuFCDjGsWC42Wi05MJCI3YPthWUPayKEFAlIIBc+BM4lQGzvBSHwaiUSZPuwsQAPl6wiD6dIkZ1L9sBYKwJiPUO8NsYzfNjGzv5nGl7eeT/77a6urnrqh0am3+7q6qrfU/3vp74vmb71lmX8BwEIQCAGAstjSCRphAAEILBAAMGiHEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsygAEIBANAQQrGlORUAhAAMGiDEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsygAEIBANAQQrGlORUAhAAMGiDEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsygAEIBANAQQrGlORUAhAAMGiDEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsygAEIBANAQQrGlORUAhAAMGiDEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsygAEIBANAQQrGlORUAhAAMGiDEAAAtEQQLCiMRUJhQAEECzKAAQgEA0BBCsaU5FQCEAAwaIMQAAC0RBAsKIxFQmFAAQQLMoABCAQDQEEKxpTkVAIQADBogxAAALREECwojEVCYUABBAsyoBjAstHRq7c8cB3fvu7Gw6+vnJ01HHsRJc2gUumb70lbQLk3iWBdRN3XbXjRw2d+uzokQ8eetDlA4grbQIr084+uXdGYM2mTVfu+NFlm25ujnHNpptHJu6amzzUfJJjCBQmgGAVRseNXxJYNbrxmiefapGqBp2rdjyAYDVocFCSAIJVEmDSt6u5av3WbVds3a6DbiAkZ/KzVDfsFoDzEMhPAMHKz4qQSwhIqtRc1UOqGqFHJiYQrAYNDsoQoJewDL1E71Vz1bcPvnH1Iz/Jo1ZiNLL59kRJkW3XBPCwXBM1Hd/Q2Pg3Hnm0W3NVt6xL19Rv+MXMTLcAnIdATgIIVk5QqQeT6Kj5fP3W7cVASOkQrGLouKuZAILVTIPjDgQkVX1b1jvctvRUzsrj0pv4BYFWAghWKxF+NxNYu+X2ax5+tDEQtPnSQMerGPI+EC8CdyGAYHUBk/zpjgNBk6cCgJoJIFg1GyDAx2vklCYDapJNgGkjSYkTQLASLwBLsu+kuWpJjF/9OE8X4Vco+H8ZAghWGXqm7s0/ELRAtukiLACNW9oJIFjtTJI746G56vzM8eSwkuEKCCBYFUCNJ8re85Zd5ePi3BweliuYiceDYCVaALLmKk0G9JD/T5n57IFyGo9AsIzYWQK0fHg4G+6k4xXDXy6f0KiLqdm74eaoE7D3Egtuocy/PeU2QmJLlgCCFaXpNZJTE/pWj49LpIbGb1y9YVQilScnqp0pWM7AeSLME4alGvJQIkweAghWHkpBhJHKDG/ecummTVr8oLDiFL6xMIL5qcMNz65wJNwIgYwAghV6SZDErLtzQlNkBl0jIZCMnT6wP5CUkAwDBBCscI3oYbRB1ZlXCxr1waohJxU/ghWiuQ1IVYZ15vHHQuRLmqIlgGCFZTozUiWsZybfPHtsOiy+pCZyAghWKAb0M4bTW25VGTy59xVvj+NBiRBAsIIwtAZG+RnD6S23H+58ls5Bb7TTeRCCVbOt5ViNPve8VhCuOR1OH39q7yu0tTslSmRfEkCw6iwK2hVZ63n6HxtVaZ5PH9h3cu/LlT6CyJMlgGDVZvqrH3m08J4OtSW634PVyn5i965+obgOgYIEEKyC4MrcJpdqwxNPaSxomUgCvFdq9cFDDwaYMJJkhgCC5duUUqvrXnzJWKOVIGZqlc1V9M2U5yVDgJ2fvZpaTezfevU1e2qlJnb5VqiV18KU5MMQLH9mz3yr8ltm+UtxvifNTR5CrfKhIlRZAlQJyxLMf79qgvbU6vT+fSf20MqevxQQshQBPKxS+PLfrD5BezVBZX/tli3GhmXktykh/RNAsHww10B2eyMYMnBqlZPniGb5KEY8Q2tPAqFqAhq+YGzaTQsxeY7XPvFUy0l+QqAKAghWFVS/jnNhSvPDj3792+jR8Jbbr04gm0atF1O2EKxqraXKoL2G9o7I1m/brplGHS9xEgKuCCBYrkh2iGfdxF3663DB6Cn5komos1EDRpAtBKsqI6kd2nbTVTs4ZXnjcy+0n+cMBFwRQLBckWyNZ/3WbQm6G2qAVy24lQW/IeCIAILlCOTSaNTWnpp71QCgLVoTVOpG9jmolACCVQnelL0MVQw3PPl0JViJNHkCCJb7IiD3Kqm29naCazbdrL/285yBQEkCCFZJgB1u1843Hc4mduoqWrISs7if7CJY7jkn23rVjBInq5kGx64IIFiuSH4Zj9wrmpwzFjhZjssW0TGX0HkZWDdxt/M4I40QJytSw4WcbDwsx9a5jMbmJqJafKbpF4cQKEsAwSpLsPn+ofFx6oPNQC6/8y5WnmkGwnFJAghWSYBLbl/zPfoHlwCRWq3djJO1hAk/yhBAsMrQa73X3s5drTkc/PflKU3/HhwPdwxGAMEajFfv0Jfa2nG+d2ZzXtXsQmqFOVkRrC8BBKsvorwB9FryZrbDEhOTi9m355QzHgggWM4gD42NOYvLVkT0FdqyZ525QbCc0ceP6IaSmnI3MpwflACCNSixruGpD3ZDg5R3I8P5QQkgWIMS6xpeizR0vZb2BUk5w9PSLgLOco9gOUPJO9kDJU5WDzhcyk8AwcrPipDFCawaHS1+M3dC4CsCCNZXJPh/lQRWbqS+XCXfZOJGsJyZejVtWN1ZLh8e7n6RKxDISwDBykuqb7gL83N9wyQbADVP1vRuM45gOeN5YQ7BcgaTiCDQkQCC1RELJyEAgRAJIFjOrPLFzIyzuIgIAhDoRADB6kSFcxCAQJAEECxnZjk/c9xZXEQEAQh0IoBgdaJS6BxVwh7Y6JHoAYdL+QmszB+UkL0JnD023TtAylfbx3xoguG6OydWj4+njKXevOsTe2byUFwfWgTLWZk5H3+j+8W5OcluFUvutbwVmih+3YsvMfvSWeErGpE2/Z3d+czc5KGiEfi+D8FyRlxvu17LSF9CNcB9uPPZz44eyXA4F5Sz00vczyt3PBApKGfFJZiIrnn40U/enlLpDSZFvRJCG1YvOoNe+/zYO4PeEkJ4qdUHDz3YUCslSWfeu/9eh5Xci/PzzTldx84UzThqPc7q5rUmYYCHI1gDwOob9LMjX3oofUMGFeDk3ldaqmxKnj65M48/5urD26x9ekOCyj6JicgiCJbL4nr22DGX0fmK69zS+lrjsfKzjv/sscbPwgeqDzYLn46b9atwtNzoisBnR4+6iqrqeBAsl4T1Hja/mS6jrjKu87Ndx+irnnhiz66SDz/bVlOWT1cyTm53RUCfpebWAFfRVhQPguUSbKS+Q+/lQE/v33eqnL582vYB/2TqcEQvicsiEl5car4ML1FdU4RgdUVT7ML81OFiN9Z417qJid5PP7n35Q93PlPYeeyoTThZvZn7uXpm8s325ks/jy72FASrGLeud515a7LrtVAvrJu4e+2W23unTiMM37//vgKFWw1YHe+Sip0+sL/3Q7laKQFVBqP7bCBYjouE3JCODoXjx7iObsMTT/UdGJWNdRhUZfQN75ZYOW6FvbZucXI+P4G5ycmO35L8MfgPiWC5Z64RmPGVg5ERDT3v270tfTmx+5d/vueH+UV5/u2pbogV20cH9nW7yvlKCSy6Vy9X+ogqIl/x4+vYHcAx2Ivzc2feOvT5f/9p7r9+u/Kqq2LZr3DFyMja225Tmv967lxvIgsZnDyU9YUP9ZwM2Lfep0gun7i7r1D2Tg9XCxBQ5++5CGe/IlgFbN3/Fr3z59/788LfzExEo7olrzk1SwjkRWpKh6oVGswhseuoy2oi6ftW6PaIEPW3fQwhVE8v2fNbVy4vmb71lrqenchzr//Va73HDYTGQQqiru4CrUtrNt08NDamHb1WbxiV06QYco47VW1U94bGwXB63r3nB9G1WmTmQLAqL5ZyH6598unKH+P0AWrgkGZ5K9Pyzm44+LrTHBBZVwKnD+w7sbvsYOCusVd8gUb3igEvWxbdkkMikq3W4M3ribQBuPKiU8EDhPqj/RF3dCBYFRSKtijVf992LvQTmWZpHRg/CdVoiQKVUD9ps/QUtSp6c5yr4IZgVUG1Nc7FPrUoF3LQAm+qrKllqjVLrn9LrU7+OxMMXWNdGp/cq4jW6lua9i9/0UvYEYv7k3F1FzbnXz2Al//DP64aHV2Y2r10WavmYOWPP//Tny7bdHPH3sbykRODCPzvQw9eOHUyahQIlifzyQ9fMbLu0ptu8vQ8148ZGr/xim3bq5ateGXdNW/38Wkow8cHf+M+Xr8xIlj+eGso6bo7vh/1IMlMtrLG+C9mZ/oOMR0UrmRdHlbvwaiDxkn4jICGmFTqIPvhjGD54bzwFL3eNgZJSlOGt9x+5f3/kinXJcv+euHUKVcczx07poEglwwNuYqQeERAw0Q1ytcACgTLqxFjrxi2wMqUSy1cV2zdftltt+kDrsH9LWEG/al5P5cMrVZj1qA3Er4bAbW1z7hYObZb/D7P00vok/bCszR5OP/MYd+JK/o81XPVvOUqX3IH5IoWTQv3LSGg7letzb/kVMw/GOleg/XkmBjblU/fcOcj41UxXLNpU7N5tG5X888Ajxc6UoPZL0sp0SYDH8e2RF9vsyJYvflUddWSZunFkFp58InGfv+HquzhIl6pthbecRETcXQlQJWwK5pKL6hwH3/8p+F8jctkdvbnz3pQq/C7DqNbvbOM0eu6F8Gqi/wyveTFFkWoLcWdHqy13rWjRKcrjs8tHx52HKPT6PQFin0QuVMeVUWGYFVFNk+8mWZFOrcrqwlq1lGenJYPE/gSPZYatssbq7oYEKzq2OaKOVLNylrZXXUL5iG1amO4S+PSrZnHgk7CIFhOMJaKxP/LXyq5y76szHpot2pO5+qx8eaf4RxLrWJcjSMcgAOlBMEaCFdVgTPNUtGv6gHu4tXyb85HMORJ3aVBChZqlcd2DsOsdBgXUZUkoA/1p0ePbHjy6b47bpV8ULHb1WilDkE/TewtKdQokADnYGrdTsl3S1L5WSkBPKxK8Q4cuVqF5L94a8nOnz7p1Lv/8MNa1EqJXN1zb578uXAVMvOIUStXPPPHw8DR/Ky8hgxnZKleTu206LN9vR20FsUPZ2cdVQO1naKNMXTtqAM/Q5UwUANJJrS1id5SrflZVw1R7+Rf9uwKYXhRIKNGtaRU7EsMB1rccycLDys3qsWADe1YsTiO8cJXK3BWOpbKv2ypB1BbFWhBkhD8CDmb9e6pIwhact7YpLzByn0wofGweplC8qR1TtSAooWfVgwvLEjQK/SyZVowU56RwuiFVynP/tXJknKmJi39KQ1SrqprRkq2VnqrtwLYArllCnTL1ep+ZhYU+fkwhLu6nEYUMx5WB2OpQ2r91m0SCIerMn1+bPqL48fPz86cm56WqGkavd6HDs/ud0ppG968RX9KXkUdZ2r1D0qwPO9Eq8+M+mo/mZrKvjf9DMJ1rwQQrCW4M6nScnQVaUHzwyRYUjG9FRIy/VtAwqRZ8j6kqpq24jDBWU9lc1JrPFbr1fWvvlZRAmQCfULE/9zih+SsviWzM8U+JBWlkGhbCCBYXwPRa7/xuRcarVRfX/B1lHlhi+KVqdixnE923soTjpNVaf/g7M5nQuhSyGllgokAgvVlMVi75fYNTzzl0E8pX7waLphcnkUvrJd+uX2xA3GynAtxi1H+546/w59qYRL4TwRrwUBSq42/eD5wU/XWL73b17/6a4eCG4KT9c0XX3LYjNhiX41R0PiylpP8DJwAm1As06v+zd3/Fv42LUqhkrrmpu+O3PH9xr4PauLRlg3LV68+9957bvduUJdovQPur9zxwOVVromsEVXn33sv8PeT5LUQwMNa9u2Db9TYbtVij8I/5X+p5djtDOEanSyplUbMFqbR90Z11LKccV9KAQZIfS6hXgwDaqWCpcqgW7VSnFfteMB/kVW/p2qClaqVMhXUuA3/kON9YtIDR1XDqvrFiLdkKOWLwyZu9vNuS3DX3TmhxsTqGq2abcH66800IjpOWrC+8fAjEZmqlqTKyfrgoSPVPVrurQbBetOpLCMLva4zM9VlipirI5CuYKnqof3WqyNrI2Y5WWs3b/liRmP0Z8uPAJAbpb0k1FGgIW/6kzPlsFszP/CPfa1Dnz9JhMxJIF3BCn9XzpwmrDqYBtM2HqF5kRfm56Rc+ls4mJ9vVrGG29JoFswUStMwV27cmGcyZuNB1R2ouZ3BotXhrTrmRAVLrVdVzyKu2nK1xK+xDquW9ZkBXkvC8j90bnIyf2BChkYg0V7CtZs3h2YJ0uOHgFaJ8fMgnlIFgUQFa91dd1dBkzgDJ6DR7Y16a+BJJXkdCaQoWKoPqsW3Iw5O2ibAaIbY7ZuiYNW1IFzsZSX29Gstdtyr2I2YpmDdHLvZSP+gBNQ5SOvVoNACDJ+iYAWyo0GApcFwktg8woZxkxQsGrBsFN7cuVBbO2OvctMKOmBy47B8ulcaVNlYcldDKGnpr+VVUGWQtvZayFfx0OQEa+Xoxio4tsSp2Wp6SdqnDUuzNOZbrf5aWUGzXlru4mcVBE7s2U1bexVga4kzOcFatWFD1aA/3PlMt6XvsvXasw3fM59L4qUpdYhXRUZRz2BGu6L4idYzgfQEa2O1HtaJ3bu6qVWLaVVhlAumv1PLXtGlxbVcEK8WSKV+Sq1O7n25VBTcHBiB5ARr+fBIdSaQ+pw+sK9Y/IhXMW7d7kKtupGJ+nxygtVYSKAKs7lq3G0Rr6GxMa2EQ7Uxv8lQq/ys4gqZ4rCGiiyUVfGcR77ote2vcXl15zmqNEJZ4fjPHqMmWCnkGiNHsJzBV4O6s7g6ReTKfesUt5FzEvf37r+XVnYj5uyUjeSqhKsrG9agfZs7EXZ2LqsnUjHsCFRwOo4j6RiYk/ESSE6wqjOVRifccPANLXGnR3x69Ij6Cp2PrlacCFaLBZGqFiC2fya3L6HPXQg1xlptT25HLX7nt7+rZR300F6DRX/zqOYzu8UbWjZJTwuB5DwsrUS+0tciv1p461uvvvaXPbsculofHdiX5tZk2Twnua7npqfn357Sz5aizM8UCKQnWH4LuryhDU8+rZLkSrNOH9h/xdbtJp0saZB2tcg2uZBzKmja80IO1IX5+bPT7+BJpaBHffOYnGD1JVJFAGmW/AIn3Yh6q8+8dWj91u1VpLOiOJXx+anDirxZdCRGOpMJU8vuOxUlg2gNEEhOsC7O11OVGH3u+ffvv89JRWZ+aiouwVq1YVSOoZO8G3jlyEIZAsmNw7o4N1+GV+F71Z511b8+UPj25huz8Q3NZwI/VgV2/dZtgSeS5EVBID3BqsnDUmlYv227Jtk4KRbRDSJVu5uTjBNJ4gSSE6zzxxdac+v6b8TR9mJysuKqYcnJGpm4qy7sPNcMgeQES+27NRrv8judvbQa31BjRgo8+nIEqwA1bllKIDnBctJVt5ThAL/kaLhaLiK6ZuzFBb9YZHWA0kLQdgLJCVbtNSm1vrebocAZZeTTPx4pcGONt1y1w023Q41Z4NH1EkhOsDT8p3bNcmXy0/v3u4rKTzxyskwOefVDj6eIQHKCZcnqanqvt4ZbACbjGwpA45YGgeQGjmrTh3o/8m79O40gj2v3sOHNt2s50Eb5M3CgoSpD4zeuHh9fPjzcXN/XIH6N7NcX5Yvjx88eO2YgpyFkIUHBqrPdV4XYrU8U3dRC7QupiqF8wxBKf+E06JunL5/mG2i7tu7fv69L2kKD49EjmrPtakpp4ZTHfiOC5dWCzl/UrOldbovXbJR72NotW5xzKJeiAe6WPKlWO+j8c92lVfn1p24H5V3jfpunVQ7w+OSDJteGpU9ijUY/Mznp/OnRNb07HIzmHGbvCK/c8cC3f/O6lvfp7lX1jmCZ6ozrJu7WomyKqk9QLncikJZgqZwVLmqd6A12TvXBKjwLxem2XWywXA0eWiaIbt1UCc31v3qtjFS1cFJUNxx8Pa72x5Ys1PIzLcFyNZWvmKlmHn+s2I1974pu1LtqhX0zFU4A1QGvf/XXzsUlE0FcrYEMnZZgDYTGbWBtsOq2ub05eWp6b/4Z/nFEtUIJytWP/KQ6x1yuFpqVv8SmJVjNvc75GZUPqcpgpesrqEpYRWWzfMa7xRBLrVBSIkHplgtX59Gs/CTTEqz8XByGlFppK4qqm5myJT0dJrvqqMKvFfpRq4wzmpWzvCFYOUEVD+Z845yOSTnz1mTVmtjxuYVPBl4r9KlWGUNpFtMA+hYnBKsvolIB5Pj4GXEjtdK4xFJp9XtzyLVCta97qAm289ZDXS3m0R65jTNpCZb2X/FsNp9NS9pm1XPuSj4uzFqhlHTjcy+UzFqx22t8dLEE+78rLcH6YnHzKJ+UfXo90Q3IGt4c4uAG1ctqdHPk3NFp2OMNTUuwsq2leuBwe+ns9LSf+mAj2doBrHEc/oE6bZ0PbiqZayWplspgc7IHnffTfK/547QESw091Q2Gai8r/sdzagew9mSEfCa0WmEI3o0qhrS+dyu0aQmWKPhsVPL5rMzA0dUKL9v09ZIG3cqot/NyrwKppeJkdTN6coLlzQc5M/mm5/pgZuO4aoVBrUFa+1ppjbcUJ6uBouUgOcGSD+LB8al6aHuLFZt/elPk5oeWOV5350SZ2x3eG9RGZHEtGeTQCr2jSk6whKPSWTIZ7hoXPIquVqhVonqXUT9XVR8Mqn6qlQ5r7Kz0w7zAU1IUrKqdLFUG611YMq5aoToKVQMqUHbd3qL6oNsIy8cWSINa+Yw4jCFFwRK+D3c+W1EDkyqDJ/bsdmihAlHFVSuUWoUwuCHAJbq0TnwB69u+JVHByiYkO9csP/Oc+5bI6GqFIQxuCKo+mJn40rEb+9o6tQCJCpbM7FyzJBPv33+fcxEsViLjqhXWXvcJs8Fo1ehoMesbviu5TSiabSnNeveeH2hkc8nhghqPqlZ2LdHXHHm9x6oVak+XetOQ/+lq8P7miy9l4XXcfKNslP0U5Avzc/oe6OD87MK/2jtL/zYHLny85nvBNWApLyE07RVGWtGNSQtWxvTk3pc1bViape/8oEVEL8zHbx06vX9fII5Vo5RktcJBs9O43f9BtxpZby9D/D8/Nq1/lV/NYSgsYWvD6Kn0jz26J14yfest0SW6ugSr4Eq29PL07lHWG6LXQ0vHhLwK1bVPPr1u4q7qWIUZs/RLG5dqzvm56Xfyb1869vs/hJmdY3/7N2EmrK5U4WEtIf/J1GH96VTWdaXPe6ZcOsgmTsuT0pTmrEqy5M7wfsjpSFCwFrZxGxvPxnapOikIEq/Pjh7VN6abiQIc0NAtqZxHsDqXgayW8Vnni3Gc1Yt6bRwprSqVag5bNbGwD6AeoI2XVfGXfrVX3gMZudpOodF+134p2TMIllnTZ5ob4PCiWoirmp81k2XK1TyyN1hE7dpaC7qgHopgBWUOx4lRK1uwb6PjrOaOLlOuax5+dP7tw/K5vpiZDWHYasfkqz2u4/mUT9Lobtn6anq74eAblnNYOm/yQ4PtSz3++E8/iWqd/tLW6B9BugNH+7OJP4Q6CqhW9DZjsGqlZH/2x6O9E5/gVaqErUZXCVa30aoNo1lR1gu/2NkUa9FRxSeiEaStxkj4t/oHevRsJgsGwfra9NKpK3f8KGua/frs4pGKTtbkoQ7ylkuB//z06FEEK3AbdUzex7HtgdQxF85PIlgLSOVMbXjiqR7DnRVAveP6k7elWTjNfUzOTeI2Qn2o3UZIbH4IYLiOnFf8+LolU7c6BrJ9UqN1rt/7H5fe9N082VwxMqJhOxqQqemy2jTswqlTee6qK4xGvY78/R1rbvruJUNDdaWB5xYgsLik2mSBG83fQi/hsut/9Vrhjm05XBqfOXfozfyzQKouUnIGNbtISylpjd3eE/GqTgnxFybw/j/f63N7p8Lp9H9j6oKlOc9O9qFbbJjvPwukIgPLk1LTGyJVEV7P0aoy+MFDD3p+aCyPS7oNS5VBJ2olYzfPAtF4P828VWu36oxVNNLLh1q1YcPQ+I1SKPmGmj2nM7EUONLZlwDN7T0QJS1YJZfB6oZVCqK/bAqbwmTrn8jD1yoC2axpDY+6OD/fu9NaGrR8eHjF8PDKjRtXDI/Ih9KfRErHVPS6kTdwXq56RF06/oGnK1jyifwsdLmwfsCyZR1HS+i8ZOvC/Hyz4dGjZhqpHXvY0ilqpOkKltYRD6EmteBJUaGL+h1yl3jcq74s052ao93A+9IhAAR8EpibZChDH96JCpYGUqlJqA8bLkPAIwE1Dnw8+abHB0b5qEQFy1XnYJQ2J9FBEtDcL2aq97VMioKFe9W3WBDAPwGa2/MwT1GwcK/ylAzC+CSguTi4V3mAJ9dLqCUZaL3KUzKaw2Rr7DSf6Xis7s5syFjHq5zsQQD3qgec5kvJCZYWkGnOP8e9Cagl+MSeXVpKuHew9qv6KmikmyRsaGxM/2owmgblM4CjHZTO4F51xNLxZFqCpVeo2wDOjnQSP6lJbbM7nylWVdFd2Y3ZtmkZyUX9knKNyQoatY+rm2HBvcr/oqUlWBXNxcmPO5aQcqz0Fp0+sM9tghWtRFB/pw/sV8z6fixO2O6/c63bZAQVm2gU+yQElQtviUlIsPR6JLixaIGSJJ/oL3t2eXiLNLBbf5kLpgqjmhe11lhq2/zgXg1URBMSLNyrviVDM7RP7N6lb37fkM4D6NH6k+el74qUS5+WFJRLu4jXQtu5+bxFmIpg4V71LlIV1QF7P7Tj1QW3a/K4mvllsrWbN1+x7Z8MN3V95LrS3RGppZOpCNbIxIQlsznMi6RKfo3eHB04jLZ8VFIuJUx/crXkcNmrziuDrCQzaDlJRbAun7h7UDTmwwcrVS3kVWnS36m9r6hSr+5FMw4XrVcths7zMwnB0sfZTCnPY9S+YWKRquaMyB/5cOczWQuX5irEblDcq2bj5j9OQrCYi9MoEHJV9GGPt6FX73nWwqWPUNSyxUoyjTI50IF9wcK9UoGQS/XxW4c+mZqKV6pairVa5bVevowbqX1ZSabFoDl/2hesxN0rKZRe7ADb1HMW0B7B5G2d3PuylEttW5KtHiFDu8RcnMIWMb7Nl8rxtU8+XZhOvDfac6l620JtW6PPPV94f8nekTu/+u49P/AwLtd5skOI0LiHNRLVh7d8gZBOafjlRwf2y7HScfkIY4lB3pY2H9X3KfyGLdyrMoXKsmBpwHQ6U52lUPNTh8+8NZmUTrUU/axhK/AaIqMZWqw20E/LgtXYGXAgIhEFzvwpdKrZZHK1NPpB8h2mq6WEURlsttegx2YFy/BcHOlU1uWn2l/K/lSPsp65Wtc++VRoExJxr3pYLc8ls4JlbKpzw5lSl590Ko9pEw8jV+uDhx6UnxVOSVCS5GElbpeS2bcpWGbcK5Vv7XSv8VM4U8UKusY9qMq88bkXQhgZj3tVzIjNd9kUrHA+qs2s8xxnnpTcqE+PHkGk8hDrG0YY5WrVPuhB7hVTnfsaq28Am4IVUeegFOr87Izk6dz0tP6lRbZvkS0QQGKhQQ9XP/KT9Vu3FbjdyS24V04wGhSswPfFkSSdnX7n3OwMCuWkBOeP5MTuX+rzUIv3jXuV30y9Q5oUrJt759nPVb0bF+fnpU0X5ue0sOTi8bScKZ33kwCe0k5ATVoyx9UPP9p+qdIzuFeu8CJYpUhm/T7nZ2YUS1ab07FOSp4QplJkK7v59P59+n5s/MXz3vYcywpJZRlKK2KDgrViZMSbDeffnvq/3bu8PY4HOSGgvlc1w1/34kt+NEsrydA06cRwisTgVvU+Z8BqwIErSxCPTwLqOnz//vs86IjcK1aScWhZg4LlkE7fqBgH2BdRsAEkJfKzqq654165LQAIVnGeqFVxdmHcWbVmKX4184eRVyOpMChYHvz8zPgaQm2kFCScjWxYaRV+luKUB5cw2kqyblCwNPyyElRtkWo8ets5TsRHQJp1Yo/7nhPF6e3bGR/0oik2KFga+lSUxgD3ydtXQR/gBoIGTECrOxz/2WMO/SwtcaM4A85xrEkzKFifvO2j544GrFiLfJd0fzJ12Em/YVYTRK26YC572qBgaeimBzU5MzlZlj33B0Yga4MvozUqeO/df6+H4hcYOX/JMShYgld1c7hKNoXSXyH1+CRZVrW59wcXHZUHNbHrj3arSs1lc9ccjWD+1quvVbcE0uzOZ1gqpNJyGULkWlVNM6WHxsd7DEWWPM29fdjSho8hkO+RBpuCpQyv3XK75ov1yHnhS/oI//meHxa+nRujI6DvnzRraGysMZVHDVXnZ2fVvYM/5dmaZgVLHCVYki3nQNlUzjlSIoRATgI227CyzM/+/FnnH8BTe19xHmdOUxEMAhCwLFhZB7NDfZFaMdOCdwYCNRKwLFjCmnVUO9Es1KrGYsqjIZARWPHj6zbaZnFxfk5DSRfaTcfHi+VUntrMU098fPA/i93OXRCAgCsClhvdWxitm7irwG7Apw/s0/q20qyW2PgJAQj4J5CQYGVwJVvrt23vMbImCyaFOn1gv5Zec1Kd9G9XnggBkwSSE6zMihoTqM11hjdvUVWxsZu5tCnbz4ZxgCbLOpkyQCBRwTJgObIAgQQJGO8lTNCiZBkChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNAIJlzaLkBwKGCSBYho1L1iBgjQCCZc2i5AcChgkgWIaNS9YgYI0AgmXNouQHAoYJIFiGjUvWIGCNwP8DqFOkvByHpBMAAAAASUVORK5CYII="/>
        </defs>
      </svg>
    </button>
  );
};

export default DemaeKanIcon;
