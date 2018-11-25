import matplotlib.pyplot as plt
from scipy import signal
from scipy.io import wavfile

sample_rate, samples = wavfile.read('songwav.wav')
frequencies, times, spectrogram = signal.spectrogram(samples, sample_rate)

#print(spectrogram)

plt.pcolormesh(times, frequencies, spectrogram)
#plt.imshow(spectrogram)
plt.ylabel('Frequency [Hz]')
plt.xlabel('Time [sec]')
plt.show()
