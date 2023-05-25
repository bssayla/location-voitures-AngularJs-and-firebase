# un fonction pour caluler La covariance echantillonnale

import numpy as np
import matplotlib.pyplot as plt

def covariance_echantillonnale(X,Y):
    n = len(X)
    moyenne_X = np.mean(X)
    moyenne_Y = np.mean(Y)
    somme = 0
    for i in range(n):
        somme += (X[i] - moyenne_X)*(Y[i] - moyenne_Y)
    return somme/(n-1)


