#!/usr/bin/env python3
"""
Script to remove background from duck image
"""
import sys
import subprocess

try:
    from rembg import remove
    from PIL import Image
    
    print("🦆 Удаляю фон с утки...")
    
    input_path = "photo_2026-02-07 18.23.41.jpeg"
    output_path = "duck.png"
    
    # Open image
    input_image = Image.open(input_path)
    
    # Remove background
    output_image = remove(input_image)
    
    # Save as PNG
    output_image.save(output_path)
    
    print(f"✅ Готово! Утка без фона сохранена в {output_path}")
    print("🔄 Обнови страницу в браузере (Cmd + Shift + R)")
    
except ImportError:
    print("❌ Библиотека rembg не установлена")
    print("📦 Устанавливаю rembg...")
    subprocess.run([sys.executable, "-m", "pip", "install", "rembg"], check=True)
    print("✅ Установлено! Запусти скрипт снова: python3 remove_bg.py")
except Exception as e:
    print(f"❌ Ошибка: {e}")
    print("\n💡 Альтернатива - используй онлайн:")
    print("   1. Открой https://remove.bg")
    print("   2. Загрузи фото утки")
    print("   3. Скачай как duck.png")
