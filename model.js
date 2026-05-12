/**
 * Eğitilmiş Karar Ağacı Modeli
 * Giriş: [mean, std, max, mean2]
 */
function score(input) {
    const mean  = input[0];
    const std   = input[1];
    const max   = input[2];
    const mean2 = input[3];

    // --- Ağaç Yapısı Başlangıcı ---
    if (mean <= 10.82) {
        if (mean <= 0.31) {
            if (mean2 <= 0.15) {
                if (mean <= 0.11) {
                    return [0, 0, 0, 0, 1]; // class: 4 (Oturma)
                } else {
                    if (mean2 <= 0.11) {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    } else {
                        return [0, 0, 0, 0, 1]; // class: 4 (Oturma)
                    }
                }
            } else { // mean2 > 0.15
                if (mean <= 0.15) {
                    return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                } else {
                    if (std <= 0.25) {
                        return [0, 0, 0, 0, 1]; // class: 4 (Oturma)
                    } else {
                        return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                    }
                }
            }
        } else { // mean > 0.31
            if (mean <= 2.83) {
                if (mean <= 1.11) {
                    return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                } else { // mean > 1.11
                    if (mean2 <= 2.11) {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    } else {
                        return [1, 0, 0, 0, 0]; // class: 0 (Yürüme)
                    }
                }
            } else { // mean > 2.83
                if (mean2 <= 9.12) {
                    return [1, 0, 0, 0, 0]; // class: 0 (Yürüme)
                } else { // mean2 > 9.12
                    if (std <= 3.66) {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    } else {
                        return [1, 0, 0, 0, 0]; // class: 0 (Yürüme)
                    }
                }
            }
        }
    } else { // mean > 10.82
        if (std <= 4.85) {
            if (std <= 4.08) {
                if (std <= 3.49) {
                    return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                } else { // std > 3.49
                    if (std <= 3.55) {
                        return [1, 0, 0, 0, 0]; // class: 0 (Yürüme)
                    } else {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    }
                }
            } else { // std > 4.08
                if (mean <= 10.86) {
                    return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                } else {
                    if (mean <= 10.97) {
                        return [1, 0, 0, 0, 0]; // class: 0 (Yürüme)
                    } else {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    }
                }
            }
        } else { // std > 4.85
            if (std <= 18.74) {
                if (mean <= 19.32) {
                    if (max <= 48.69) {
                        return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                    } else {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    }
                } else { // mean > 19.32
                    return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                }
            } else { // std > 18.74
                if (mean <= 24.69) {
                    if (max <= 69.52) {
                        return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                    } else {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    }
                } else { // mean > 24.69
                    if (std <= 23.52) {
                        return [0, 1, 0, 0, 0]; // class: 1 (Koşma)
                    } else {
                        return [0, 0, 1, 0, 0]; // class: 2 (Zıplama)
                    }
                }
            }
        }
    }
}